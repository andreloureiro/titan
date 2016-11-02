import xs from 'xstream';
import {div, input} from '@cycle/dom';

export default function MasterPassword({DOM}) {
  const masterPassword$ = DOM.select('#masterPassword')
    .events('input')
    .map(e => e.target.value)
    .startWith('');

  const vdom$ = masterPassword$.map(password =>
    div([
      input('#masterPassword', {
        attrs: {
          type: 'password',
          placeholder: 'Master password'
        }
      })
    ])
  );

  return {
    DOM: vdom$,
    masterPassword$
  };
}
