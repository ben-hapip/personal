import { Button, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FileText, GitHub, Linkedin, Mail } from 'react-feather';
import { ContactModal } from '../components/ContactModal/ContactModal';
import { PortfolioSection } from '../components/PortfolioSection/PortfolioSection';

import meImage from '../public/me.png';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const theme = useMantineTheme();
  const { width } = useViewportSize();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProject, setShowProjects] = useState(false);
  useEffect(() => {
    setIsMobile(width < 600 ? true : false);
  }, [width]);

  const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ben-hapip-07b014109/', '_blank');
  };

  const goToGitHub = () => {
    window.open('https://github.com/ben-hapip', '_blank');
  };

  const goToPDF = () => {
    window.open('https://bhapip.vercel.app/resume.pdf', '_blank');
  };

  const goToProjects = () => {
    setShowProjects(true);

    setTimeout(() => {
      console.log(document.getElementById('projects'));
      document
        .getElementById('projects')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
    }, 200);
  };

  const footerOptions = () => (
    <>
      <div onClick={goToLinkedIn}>
        <Linkedin width="34" height="34" />
      </div>
      <div onClick={goToGitHub}>
        <GitHub width="34" height="34" />
      </div>
      <div onClick={() => setShowModal(true)}>
        <Mail width="34" height="34" />
      </div>
      <div title="Download my resume" onClick={goToPDF}>
        <FileText width="34" height="34" />
      </div>
    </>
  );

  return (
    <div
      className={styles.container}
      style={{
        color: theme.colors.ben[0],
      }}
    >
      <Head>
        <title>{`Ben's Site`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ color: theme.colors.ben[0] }}>
        <div className={styles.mainContainer}>
          <div className={styles.homeSection}>
            {isMobile && (
              <Image
                alt="meDotJPG"
                src={meImage}
                width="300"
                height="300"
                className={styles.meImage}
                onClick={() => goToLinkedIn()}
              />
            )}
            <div className={styles.aboutMe}>BEN HAPIP</div>
            <div
              className={styles.aboutMeSection}
              style={{ color: theme.colors.greylol[0] }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industries standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            {isMobile ? (
              <div className={styles.mobileButtonContainer}>
                <Button color="lightBen" onClick={goToProjects}>
                  View Projects
                </Button>
                <div className={styles.mobileSocialContainer}>
                  {footerOptions()}
                </div>
              </div>
            ) : (
              <div className={styles.buttonContainer}>
                <Button color="lightBen" onClick={goToProjects}>
                  View Projects
                </Button>
                {footerOptions()}
              </div>
            )}
          </div>

          {!isMobile && (
            <div onClick={goToLinkedIn}>
              <Image
                alt="meDotJPG"
                src={meImage}
                width="500"
                height="500"
                className={styles.meImage}
              />
            </div>
          )}

          {showModal && <ContactModal onClose={() => setShowModal(false)} />}
        </div>
        {showProject && (
          <div
            id="projects"
            className={styles.projectContainer}
          >
            <PortfolioSection />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
