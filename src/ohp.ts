import { keys } from "ts-transformer-keys";
import { HTMLProps } from "react";

const KEYS_HTML_PROPS = keys<HTMLProps<HTMLElement>>();

export const ohp = <TProps extends object>(props: TProps) => {
  const acceptedProps: Partial<typeof props> = {};
  for (const keyProp in props) {
    if (
      KEYS_HTML_PROPS.indexOf(keyProp as keyof HTMLProps<HTMLElement>) !== -1
    ) {
      acceptedProps[keyProp] = props[keyProp];
    }
  }
  return acceptedProps;
};
