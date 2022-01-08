import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';

export function ArrowButtonWithTooltip({
  disabled,
  onClick,
  tooltipContent,
  buttonTitle,
}) {
  return (
    <Popup
      content={tooltipContent}
      disabled={!disabled}
      trigger={
        <span>
          <Button disabled={disabled} size="big" animated onClick={onClick}>
            <Button.Content visible>{buttonTitle}</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </span>
      }
    />
  );
}
