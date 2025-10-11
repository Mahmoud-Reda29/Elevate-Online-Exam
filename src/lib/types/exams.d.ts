declare type Exam = {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
} & DatabaseFields;

declare type GetExamsBySubjectResponse = {
  exams: Exam[];
};
