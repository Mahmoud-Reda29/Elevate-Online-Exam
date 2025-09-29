declare type Diploma = {
  name: string;
  icon: string;
} & DatabaseFields;

declare type GetDiplomasResponse = {
  subjects: Diploma[];
};
