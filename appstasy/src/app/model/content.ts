import {Content} from './portfolioContent';

export interface PortfolioContent {
  id: string;
  category: number;
  contentParent: Content[];
}

