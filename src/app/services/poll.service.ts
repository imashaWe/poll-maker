import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, Query, QuerySnapshot } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})

export class PollService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  async create(data): Promise<string> {

    const user = this.authService.getUser();
    const pollsDocsRef = this.firestore.collection('polls');
    data.uid = user.uid;
    data.totalVotes = 0;
    data.to = new Date(data.to);
    data.from = new Date(data.from);
    const answers = data.answers.map((a) => { return { 'answer': a, 'vote': 0 } });
    data.answers = answers;
    const res = await pollsDocsRef.add(data);
    return res.id;
  }

  async setVote(pollId: string, answerIndex: number): Promise<void> {
    const user = this.authService.getUser();
    const pollsDocsRef = this.firestore.collection('polls').doc(pollId);
    const voteData = await this.getVoteData(pollId);
    const voteRef = this.firestore.collection('votes').doc();
    this.firestore.firestore.runTransaction(async (t) => {
      return t.get(pollsDocsRef.ref).then((doc) => {
        const answers = doc.data()['answers'];
        let totalVotes = doc.data()['totalVotes'];
        if (!voteData.empty) {
          const erlyVote: number = voteData.docs[0].data()['answer'];
          answers[erlyVote].vote--;
          t.update(voteData.docs[0].ref, { 'answer': answerIndex, 'time': new Date() });
        } else {
          totalVotes++;
          t.set(voteRef.ref, { 'pollId': pollId, 'uid': user.uid, 'answer': answerIndex, 'time': new Date() });
        }
        answers[answerIndex].vote++;
        t.update(pollsDocsRef.ref, { 'answers': answers, 'totalVotes': totalVotes });
      })
    })
  }

  pollSnapshot(id: string): Observable<unknown> {
    return this.firestore.collection('polls').doc(id).valueChanges();
  }

  voteDataSnapshot(pollId: string): Query<unknown> {
    const user = this.authService.getUser();
    return this.firestore.collection('votes').ref.where('pollId', '==', pollId).where('uid', '==', user.uid).limit(1);
  }

  async getVoteData(pollId: string): Promise<QuerySnapshot<any>> {
    const user = this.authService.getUser();
    const voteRef = this.firestore.collection('votes');
    return await voteRef.ref.where('pollId', "==", pollId).where('uid', "==", user.uid).limit(1).get();
  }

  async checkPoll(pollId: string): Promise<number> {
    /*
        poll available 1
        poll end -2
        poll not started -1
        poll not exist 0
    */

    const poll = await this.firestore.collection('polls').doc(pollId);
    if (poll != null) {
      return 1;
    } else {
      return 0;
    }

  }

}

