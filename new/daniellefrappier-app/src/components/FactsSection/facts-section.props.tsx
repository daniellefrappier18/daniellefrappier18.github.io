import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Fact = {
  factTitle: string;
  factDescription: string;
  icon: IconDefinition;
};

export type FactsSectionProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
  className?: string;
  title: string;
  facts: Array<Fact>;
};
