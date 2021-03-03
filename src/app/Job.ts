export interface Job {
  name?: string | null;
  type?: string | null;
}

export class SearchResult {
  name: string;
  publication_date: string;
  location: string;
  category: string;
  level: string;
  url: string;
  company: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || null;
    this.publication_date = obj && obj.publication_date || null;
    this.location = obj && obj.location || null;
    this.category = obj && obj.category || null;
    this.level = obj && obj.level || null;
    this.url = obj && obj.url || null;
    this.company = obj && obj.company || null;
  }
}

// export class SearchResult {
//   id: string;
//   url: string;
//   title: string;
//   company_name: string;
//   category: string;
//   tags: string;
//   job_type: string;
//   publication_date: string;
//   candidate_required_location: string;
//   salary: string;
//   description: string;


//   constructor(obj?: any) {
//     this.id = obj                          && obj.name                        || null;
//     this.url = obj                         && obj.url                         || null;
//     this.title = obj                       && obj.title                       || null;
//     this.company_name = obj                && obj.company_name                || null;
//     this.category = obj                    && obj.category                    || null;
//     this.tags = obj                        && obj.tags                        || null;
//     this.job_type = obj                    && obj.job_type                    || null;
//     this.publication_date = obj            && obj.publication_date            || null;
//     this.candidate_required_location = obj && obj.candidate_required_location || null;
//     this.salary = obj                      && obj.salary                      || null;
//     this.description = obj                 && obj.description                 || null;
//   }
// }