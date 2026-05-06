export interface Place {
  id: string;
  kanji: string;
  romaji: string;
  english: string;
  type: 'city' | 'ward' | 'neighborhood' | 'town';
  coordinates: [number, number];
  description: string;
  ward?: string;
}
