import React from "react";
import PropTypes from "prop-types";

import "../styles/Footer.css";

import { VISIBILITY_FILTERS } from "../store/actions";
const {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} = VISIBILITY_FILTERS;

class Footer extends React.Component {
  renderFilterDOM(filter, name) {
    if(filter === this.props.filter) {
        return(<span>{name}</span>);        
    }

    return(
      <a href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onChangeFilter(filter)
        }}>
        {name}
      </a>
    )
  }
  render() {
    return(
      <div className="footer">
        展示：
        {"  "}
        {this.renderFilterDOM(SHOW_ALL, "全部")}
        {" | "}
        {this.renderFilterDOM(SHOW_COMPLETED, "已完成")}
        {" | "}
        {this.renderFilterDOM(SHOW_ACTIVE, "未完成")}
      </div>
    )
  }
}

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}

export default Footer;