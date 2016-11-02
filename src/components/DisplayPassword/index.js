import xs from 'xstream';
import sampleCombine from 'xstream/extra/sampleCombine';
import {button, div, pre} from '@cycle/dom';

export default function DisplayPassword({DOM, generatedPassword$}) {
  const vdom$ = generatedPassword$
    .map(password =>
      div([
        div('.display-password', [
          pre(password)
        ])
      ])
    );

  return {
    DOM: vdom$
  }
}
