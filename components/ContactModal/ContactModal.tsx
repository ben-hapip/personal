import { Button, Modal, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';
import styles from './ContactModal.module.css';
export const ContactModal = ({ onClose }: { onClose: any }) => {
  const [opened, setOpened] = useState(true);
  
  const [isEmailValid, setIsEmailValid] = useState(true);
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
        <TextInput
          placeholder="Your name"
          label="Full name"
          data-autofocus
          size="md"
        />
        <TextInput
          label="Your email"
          withAsterisk
          placeholder="Your email"
          size="md"
          error={isEmailValid ? '' : 'Invalid email'}
        />

        <Textarea
          placeholder="An awesome message to send me"
          autosize={true}
          minRows={4}
          maxRows={6}
          label="Your message"
          size="md"
        />
        <div className={styles.buttonContainer}>
          <Button color="lightBen">Send</Button>
        </div>
      </Modal>
    </>
  );
};
