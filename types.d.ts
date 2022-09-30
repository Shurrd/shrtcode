interface IData {
  data: {
    ok: boolean;
    result: {
      full_short_link: string;
      short_link: string;
      original_link: string;
    };
  };
}
