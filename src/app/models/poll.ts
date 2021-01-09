import {Answer} from 'src/app/models/answer';

export interface Poll {
    title:string,
    answers:Answer[],
}
