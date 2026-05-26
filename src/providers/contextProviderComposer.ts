import { cloneElement } from "react";

interface Props {
  contextProviders: React.ReactElement<React.PropsWithChildren>[];
  children: React.ReactNode;
}

const ContextProviderComposer = ({ contextProviders, children }: Props) => {
  return contextProviders.reduceRight(
    (children, parent) => cloneElement(parent, { children }),
    children
  );
};

export default ContextProviderComposer;
