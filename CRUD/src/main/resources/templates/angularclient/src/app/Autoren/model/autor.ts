export class Verlag {
  name: string;
}

export class Buch {
  buchname: string;
}

export class Autor {
  autornummer: string;
  vorname: string;
  nachname: string;
  verlage: Verlag[];

  verlag: number[];
  autorbuecher: Buch[];
}
