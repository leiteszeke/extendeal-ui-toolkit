export interface ComponentPresentationProps {
  children?: React.ReactNode;
  componentProps?: Array<ComponentPropertiesProps>;
  componentStyles?: Array<ComponentStylesProps>;
  description: string;
  library: string;
  name: string;
  subtitle: string;
  title: string;
}

export interface ComponentPropertiesProps {
  default?: string;
  description: string;
  name: string;
  type: string;
}

export interface ComponentStylesProps {
  description: string;
  name: string;
}
