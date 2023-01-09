import React from "react";
// next/components
import Link from "next/link";
// types
import type { Url } from "url";
// styles
import styles from "../../styles/Components/Button/Button.module.css";

/**
 * Variants:
 * plain button
 * button link
 * nav element
 * nav element link
 */

type Props = {
  text: string;
  isNavElem?: boolean;
  link?: Url | string;
};

const PlainTextOrLink = ({
  text,
  link,
}: Omit<Props, "isNavLink">): React.ReactElement => (
  <>
    {link !== undefined ? (
      <Link className={styles.button_link} href={link as Url | string}>
        {text}
      </Link>
    ) : (
      text
    )}
  </>
);

const Button = ({ text, isNavElem, link }: Props) => {
  const transformedText = text[0].toUpperCase() + text.slice(1);

  if (isNavElem)
    return (
      <button className={`${styles.button} ${styles.button_nav}`}>
        <PlainTextOrLink text={transformedText} link={link} />
      </button>
    );
  return (
    <button className={`${styles.button} ${styles.button_plain}`}>
      <PlainTextOrLink text={transformedText} link={link} />
    </button>
  );
};

export default Button;
