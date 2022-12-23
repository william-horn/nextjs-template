
import buildClassName from "../../lib/helpers/buildClassName";

const Text = ({ className="", remove, children }) => {
  return (
    <p
    className={buildClassName({
      extend: className,
      remove})
    }>
        {children}
    </p>
  );
};

export default Text;

