export interface StatusCheck {
  id: string;
  client_name: string;
  timestamp: Date;
}

export interface StatusCheckCreate {
  client_name: string;
}

export interface Location {
  id: number;
  city: string;
  country: string;
  count: number;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Benefit {
  title: string;
  description: string;
  description2: string;
  image: string;
}

export interface SubSolution {
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface Solution {
  id: string;
  name: string;
  icon: string;
  description: string;
  subSolutions: SubSolution[];
}

