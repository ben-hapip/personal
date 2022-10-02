import { Card, Text } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import dmv from '../../public/DMV.png';
import hrv from '../../public/hrv.png';
import pattern from '../../public/pattern.png';
import sophie from '../../public/sophie.png';
import styles from './PortfolioSection.module.css';
interface PortfolioOptions {
  title: string;
  image: StaticImageData;
  description: string;
  linkTo: string;
}
export const PortfolioSection = () => {
  const portfolioOptions = [
    {
      title: 'Heart River Voice',
      image: hrv,
      description:
        'Website that allows the distribution of a monthly newsletter for everyone in the Stark County area.',
      linkTo: 'https://heartrivervoice.com/',
    },
    {
      title: `Sophie's website`,
      image: sophie,
      description:
        'Personal website made for my sister to allow her to show off some of her finest graphic design work.',
      linkTo: 'https://sophiajilekdesigns.com/',
    },
    {
      title: 'Pattern For Life',
      image: pattern,
      description:
        'Secure Bible sharing application that allows users to distribute study plans as well as the application itself.',
      linkTo: 'https://pattern.patternsites.com/fields',
    },
    {
      title: 'Drive ND Mobile Application',
      image: dmv,
      description:
        'This app allows users conduct many driver license and vehicle services directly from their mobile device.',
      linkTo: 'https://apps.apple.com/us/app/nd-drive/id1533868431',
    },
  ] as PortfolioOptions[];

  const goToUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {portfolioOptions.map((option, index) => {
        return (
          <Card
            className={styles.portfolioCard}
            onClick={() => goToUrl(option.linkTo)}
            p="lg"
            radius="md"
            key={index}
          >
            <Text
              size="xl"
              color="greylol"
              align="center"
              className={styles.portfolioTitle}
            >
              {option.title}
            </Text>
            <Card.Section>
              <div className={styles.portfolioImage}>
                <Image
                  style={{ borderRadius: 30 }}
                  src={option.image}
                  height={200}
                  width={200}
                  layout="fixed"
                  alt={`${option.title}-photo`}
                />
              </div>
            </Card.Section>

            <Text
              size="sm"
              color="greylol"
              className={styles.portfolioDescription}
              align="center"
            >
              {option.description}
            </Text>
          </Card>
        );
      })}
    </>
  );
};
