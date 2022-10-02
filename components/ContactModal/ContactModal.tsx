import emailjs from '@emailjs/browser';
import {
  Button,
  Group,
  Modal,
  Notification,
  Textarea,
  TextInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRef, useState } from 'react';
import { Check, X } from 'react-feather';
import styles from './ContactModal.module.css';

export const ContactModal = ({ onClose }: { onClose: any }) => {
  const [opened, setOpened] = useState(true);
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isFailed, setisFailed] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const sendEmail = async () => {
    setIsSending(true);
    const result = await emailjs.sendForm(
      'service_02cx93e',
      'template_fuzzrvc',
      formRef.current ?? '',
      'R5Mrq0z4K5vCUjKBv'
    );
    setIsSending(false);

    if (result && result.status === 200) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
      form.reset();
    } else {
      setisFailed(true);
      setTimeout(() => {
        setisFailed(false);
      }, 2000);
    }
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        title="Let's Connect!"
      >
        {isFailed && (
          <Notification
            icon={<X size={18} />}
            color="red"
            onClose={() => setisFailed(false)}
          >
            Email failed to send, please try again.
          </Notification>
        )}
        {isSent && (
          <Notification
            icon={<Check size={18} />}
            color="green"
            onClose={() => setIsSent(false)}
          >
            Email Sent!
          </Notification>
        )}
        <form ref={formRef as any} onSubmit={form.onSubmit(sendEmail)}>
          <TextInput
            required
            label="Name"
            {...form.getInputProps('name')}
            name="from_name"
          />
          <TextInput
            required
            label="Email"
            {...form.getInputProps('email')}
            name="from_email"
          />
          <Textarea
            required
            label="Message"
            autosize
            minRows={4}
            maxRows={6}
            {...form.getInputProps('message')}
            name="message"
          />

          <Group position="center" mt="md">
            <div className={styles.buttonContainer}>
              <Button disabled={isSending} type="submit" color="lightBen">
                Send
              </Button>
            </div>
          </Group>
        </form>
      </Modal>
    </>
  );
};
