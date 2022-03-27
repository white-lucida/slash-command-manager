import { DisabledTextBody } from "./DisabledTextBody";
import { TextBody } from "./TextBody";
import { TextContainer } from "./TextContainer";
import { TextLabel } from "./TextLabel";

export function Text({ id, label, value, onChange, disabled }) {
  return (
    <TextContainer>
      <TextLabel id={id}>{label}</TextLabel>
      {disabled ? (
        <DisabledTextBody id={id} value={value} />
      ) : (
        <TextBody id={id} value={value} onChange={onChange} />
      )}
    </TextContainer>
  );
}
