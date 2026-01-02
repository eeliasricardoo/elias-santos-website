'use client';

import { useEffect, useState } from 'react';

export function MicrosoftClarity() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      (function (c: any, l: any, a: any, r: any, i: any) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        var t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        var y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "spe14tqrqi");
    }
  }, [isClient]);

  return null;
}
