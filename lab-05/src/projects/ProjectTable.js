import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ProjectRow from './ProjectRow';

class ProjectTable extends Component {
  render() {
    const { projects, onDelete, onRestore } = this.props;

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <ProjectRow
              project={project}
              key={project._id}
              onDelete={onDelete}
              onRestore={onRestore}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

ProjectTable.defaultProps = {
  projects: []
};

ProjectTable.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired
};

export default ProjectTable;
