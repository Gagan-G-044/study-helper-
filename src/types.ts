export interface QuestionAnswer {
  question: string;
  answer: string;
}

export interface KeyConcept {
  concept: string;
  definition: string;
}

export interface StudyResult {
  simpleExplanation: string;
  revisionNotes: string[];
  importantQuestions: QuestionAnswer[];
  keyConcepts: KeyConcept[];
}

export interface StudyExample {
  title: string;
  topic: string;
  content: string;
}
