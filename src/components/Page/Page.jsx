import Container from "../Container/Container";
import "./page.scss";

const Page = ({ className, children }) => {
  return (
    <section className={`page ${className}`}>
      <Container>
        <div className={`in ${className}-in`}>{children}</div>
      </Container>
    </section>
  );
};
export default Page;
