type ICourse = {
  id: number;
  displayname: string;
  shortname: string;
  fullname: string;
  summary: string;
  visible: number;
};

interface CourseFormatOption {
  name: string;
  value: number;
}

interface ICoursesResponse {
  id: number;
  shortname: string;
  categoryid: number;
  categorysortorder: number;
  fullname: string;
  displayname: string;
  idnumber: string;
  summary: string;
  summaryformat: number;
  format: string;
  showgrades: number;
  newsitems: number;
  startdate: number;
  enddate: number;
  numsections: number;
  maxbytes: number;
  showreports: number;
  visible: number;
  groupmode: number;
  groupmodeforce: number;
  defaultgroupingid: number;
  timecreated: number;
  timemodified: number;
  enablecompletion: number;
  completionnotify: number;
  lang: string;
  forcetheme: string;
  courseformatoptions: CourseFormatOption[];
  showactivitydates: boolean;
  showcompletionconditions: boolean | null;
}

export type { ICourse, ICoursesResponse };
