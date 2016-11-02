import xs from 'xstream';
import {div, input} from '@cycle/dom';

export default function SiteKeyword({DOM}) {
  const keyword$ = DOM.select('#siteKeyword')
    .events('input')
    .map(e => e.target.value)
    .startWith('');

  const vdom$ = keyword$.map(keyword =>
    div([
      input('#siteKeyword', {
        attrs: {
          type: 'text',
          placeholder: 'Site keyword'
        }
      })
    ])
  );

  return {
    DOM: vdom$,
    keyword$
  }
}
