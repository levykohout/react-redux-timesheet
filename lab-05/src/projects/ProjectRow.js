import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class ProjectRow extends React.Component {
  handleClick = event => {
    const { project, onDelete, onRestore } = this.props;

    if (project.deleted) {
      onRestore(project);
    } else {
      onDelete(project);
    }

    event.stopPropagation();
  };

  showDetail = () => {
    const { history, project } = this.props;

    if (project.deleted) {
      console.log('You cannot edit a deleted project.');
      return;
    }

    history.push(`/projects/detail/${project._id}`);
  };

  render() {
    const { project } = this.props;

    return (
      <tr className={project.deleted ? 'deleted' : ''} onClick={this.showDetail}>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>
          <Button onClick={this.handleClick} bsStyle={project.deleted ? 'success' : 'danger'}>
            {project.deleted ? 'Restore' : 'Delete'}
          </Button>
        </td>
      </tr>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default withRouter(ProjectRow);
