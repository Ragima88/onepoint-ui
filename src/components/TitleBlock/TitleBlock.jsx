import "./title-block.scss";

const TitleBlock = ({ title = "No title", desc = "", topLevel = true }) => {
  return (
    <div className="title-block">
      {topLevel ? (
        <h1 className="title-block-title">{title}</h1>
      ) : (
        <h2 className="title-block-title">{title}</h2>
      )}
      {desc && <p className="title-block-desc">{desc}</p>}
    </div>
  );
};
export default TitleBlock;
