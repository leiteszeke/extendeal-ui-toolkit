// Dependencies
import * as React from 'react';
// Props
import { CodeSnippetProps, defaultProps } from './CodeSnippetProps';
// Styled
import { Wrapper, NumberColumn, Code } from './CodeSnippetStyle';

const CodeSnippet = (props:CodeSnippetProps) => {
  let html = '';
  let numberColumns = 0;
  const componentProps = { ...defaultProps, ...props };
  const {
    identation,
    objects,
  } = componentProps;

  const parseObject = (object:Object, index:number):string[] =>
    Object.entries(object).map(([key, value], idx) => {
      if (typeof value === 'object') {
        numberColumns += 2;

        return `
          ${ idx === 0 && index === 0 ? '' : '<br>' }
          ${ '&nbsp;'.repeat(identation * index) } ${ key }: {
          ${ parseObject(value, index + 1) }
          <br>
          ${ '&nbsp;'.repeat(identation * index) }
        }`;
      }

      numberColumns += 1;

      return `
        <br>
        ${ '&nbsp;'.repeat(identation * index) } ${ key }: ${ typeof value === 'string'
          ? `<span class='${ typeof value }'>"${ value }"</span>`
          : `<span class='${ typeof value }'>${ value }</span>`
        }
      `;
    });

  objects.forEach((item:any) => {
    html += parseObject(item, 0);
  });

  const generateNumbers = (length:number) =>
    [...Array(length)]
      .map((item:any, i:number) => `<p>${ i + 1 }</p>`)
      .join(' ');

  return (
    <Wrapper>
      <NumberColumn content={ generateNumbers(numberColumns) } />
      <Code>
        <code
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Code>
    </Wrapper>
  );
};

export { CodeSnippet };
