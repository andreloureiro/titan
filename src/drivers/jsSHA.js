import jsSHA from 'jssha';

export function makeSHADriver() {
  return function shaDriver(input$) {
    const outputHash$ = input$
      .map(input => {
        if (!!input) {
          const hashObj = new jsSHA(
            'SHA-256',
            'TEXT',
            {numRounds: 1}
          );
          hashObj.update(input);
          return hashObj
            .getHash('B64')
            .slice(0, 12);
        }
        return '';
      });
    return {outputHash$};
  }
}
