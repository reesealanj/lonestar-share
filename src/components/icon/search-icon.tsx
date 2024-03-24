import { Icon } from "./icon";

export function SearchIcon({ ...rest }) {
  return (
    <Icon {...rest}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </Icon>
  );
}
