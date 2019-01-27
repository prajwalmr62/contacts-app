/**
 * @author prajwalmr62
 * progress component
 */

import * as React from "react";

class ProgressIndicator extends React.Component {
  render() {
    const secondClassName = this.props.currentStage === "2"? "next-to-be": "";
    const firstClassName = this.props.currentStage === "1"? "next-to-be" : secondClassName? "completed": "";
    return (
      <ul className="progress-indicator py-5">
        <li className={firstClassName}>
          <span className="bubble" />
        </li>
        <li className={secondClassName}>
          <span className="bubble" />
        </li>
      </ul>
    );
  }
}

export default ProgressIndicator;
