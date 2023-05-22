import css from './Section.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <section className={css.section}>
        <h2 className={css.sectionTitle}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  };
}
  
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;