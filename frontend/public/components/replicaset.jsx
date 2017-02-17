import React from 'react';

import {DetailsPage, ListPage, makeList} from './factory';
import {Header, rowOfKind} from './workloads';
import {Cog, navFactory, ResourceHeading, ResourceSummary, ResourcePodCount} from './utils';

const menuActions = _.at(Cog.factory, [
  'ModifyCount',
  'ModifyPodSelector',
  'ModifyNodeSelector',
  'ModifyLabels',
  'Edit',
  'Delete',
]);

const Details = (replicaSet) => <div>
  <ResourceHeading resourceName="Replica Set" />
  <div className="co-m-pane__body-group">
    <div className="co-m-pane__body-section--bordered">
      <div className="row no-gutter">
        <div className="col-md-6">
          <ResourceSummary resource={replicaSet} />
        </div>
        <div className="col-md-6">
          <ResourcePodCount resource={replicaSet} />
        </div>
      </div>
    </div>
  </div>
</div>;

const {details, editYaml, pods} = navFactory;
const pages = [details(Details), editYaml(), pods()];
const ReplicaSetsDetailsPage = props => <DetailsPage pages={pages} menuActions={menuActions} {...props} />;

const ReplicaSetsList = makeList('ReplicaSets', 'replicaset', Header, rowOfKind('replicaset', menuActions));
const ReplicaSetsPage = props => <ListPage canCreate={true} ListComponent={ReplicaSetsList} {...props} />;

export {ReplicaSetsList, ReplicaSetsPage, ReplicaSetsDetailsPage};
