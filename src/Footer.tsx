type FooterProps = {
  length: number;
};

const Footer = ({ length }: FooterProps) => {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? 'item' : 'items'}
      </p>
    </footer>
  );
};

export default Footer;
