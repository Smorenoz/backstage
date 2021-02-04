/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  ComponentEntity,
  Entity,
  RELATION_API_PROVIDED_BY,
} from '@backstage/catalog-model';
import {
  CodeSnippet,
  InfoCard,
  Link,
  Progress,
  WarningPanel,
} from '@backstage/core';
import {
  ComponentsTable,
  useEntity,
  useRelatedEntities,
} from '@backstage/plugin-catalog-react';
import React, { PropsWithChildren } from 'react';

const ComponentsCard = ({
  children,
  variant = 'gridItem',
}: PropsWithChildren<{ variant?: string }>) => {
  return (
    <InfoCard variant={variant} title="Providers">
      {children}
    </InfoCard>
  );
};

type Props = {
  /** @deprecated The entity is now grabbed from context instead */
  entity?: Entity;
  variant?: string;
};

export const ProvidingComponentsCard = ({ variant = 'gridItem' }: Props) => {
  const { entity } = useEntity();
  const { entities, loading, error } = useRelatedEntities(entity, {
    type: RELATION_API_PROVIDED_BY,
  });

  if (loading) {
    return (
      <ComponentsCard variant={variant}>
        <Progress />
      </ComponentsCard>
    );
  }

  if (error || !entities) {
    return (
      <ComponentsCard variant={variant}>
        <WarningPanel
          severity="error"
          title="Could not load components"
          message={<CodeSnippet text={`${error}`} language="text" />}
        />
      </ComponentsCard>
    );
  }

  return (
    <ComponentsTable
      title="Providers"
      variant={variant}
      emptyComponent={
        <div>
          No component provides this API.{' '}
          <Link to="https://backstage.io/docs/features/software-catalog/descriptor-format#specprovidesapis-optional">
            Learn how to provide APIs.
          </Link>
        </div>
      }
      entities={entities as ComponentEntity[]}
    />
  );
};
