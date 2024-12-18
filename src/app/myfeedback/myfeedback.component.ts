import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
NgbOffcanvas;
import { NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';

import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

declare var require: any;

@Component({
  selector: 'app-feedback-my-feedback',
  templateUrl: './myfeedback.component.html',
  styleUrls: ['./myfeedback.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyfeedbackComponent implements OnInit {
  showAllCommentId: number | null = null;
  isDropdownDisabled = true;
  giveFeedback: any = false;
  writeFeedback: any = true;
  requestFeedback: any = false;

  activeOkr = 1;

  feedbacktab = 1;
  feedbacktype = 1;

  week = 1;

  activeCommentId: number | null = null;

  showComment(id: number): void {
    this.activeCommentId = this.activeCommentId === id ? null : id;
  }

  selectOwner(selectedData: any): void {
    this.owners.forEach((data) => {
      if (data !== selectedData) {
        data.ids = false; // Deselect all other users
      }
    });

    selectedData.ids = !selectedData.ids; // Toggle selection for the clicked user
  }


  showAllComment(id: number): void {
    this.showAllCommentId = this.showAllCommentId === id ? null : id;
  }

  employeeData: Array<Object> = [
    { initial: 'D', name: 'David Martin', email: 'davidMartin@berijam.com' },
    {
      initial: 'L',
      name: 'Lachlan Martin',
      email: 'lachlanMartin@berijam.com',
    },
    { initial: 'L', name: 'Levi Lee', email: 'leviLee@berijam.com' },
    { initial: 'O', name: 'Olivia Jones', email: 'oliviaJones@berijam.com' },
    { initial: 'S', name: 'Sam', email: 'Sam@berijam.com' },
  ];

  toggleFeedbackExpansion(item: any) {
    item.isFeedbackExpanded = !item.isFeedbackExpanded;
  }

  getFeedbackText(item: any): string {
    const limit = 100;
    return item.isFeedbackExpanded || item.feedbackDesc.length <= limit
      ? item.feedbackDesc
      : item.feedbackDesc.substring(0, limit) + '...';
  }

  feedback = 2;
  addActiveOKR = 1;

  public cardViewData: any[] = [
    {
      id: 1,
      isFeedbackExpanded: false,
      isRead: true,
      isFavourite: true,
      isExpanded: false,
      animationClass: '',
      isPinned: true,
      feedbackFrom: 'myFeedback',
      name: 'Louis Fuller ',
      to: " David Martin",
      toType: "send",
      jobtitle: "Project Manager",
      title: 'I feel challenged in my role. I love a good challendge!',
      date: "Oct 8, 2024 6:45:43 PM",
      pic: 'assets/images/user.jpg',
      feedbackType: 'Recognition',
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },

    {
      id: 3,
      isExpanded: false,
      isRead: true,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'Switch to a 4-day workweek',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/9.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Constructive/Development',
      name: 'Louis Fuller',
      to: "Anonymous",
      toType: "received",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
   
    {
      id: 3,
      isFeedbackExpanded: false,
      isRead: false,
      isFavourite: false,
      isExpanded: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/5.jpg',
      feedbackType: 'Coaching',
      name: 'Louis Fuller',
      to: "David Martin",
      toType: "received",
      jobtitle: "Project Manager",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    //{
    //  id: 4,
    //  isFeedbackExpanded: false,
    //  isRead: true,
    //  isFavourite: false,
    //  isExpanded: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myFeedback',
    //  title: 'It would be cool if it was displayed on a TV screen so everyone could see',
    //  date: "Feb 22, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/7.jpg',
    //  feedbackType: 'Recognition',
    //  jobtitle: "Sales Representative",
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 5,
    //  isFeedbackExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: ' I feel challenged in my role. I love a good challenge!',
    //  date: "Dec 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/8.jpg',
    //  feedbackType: 'Appreciation',
    //  jobtitle: "Sales Representative",
    //  name: 'David Martin',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 6,
    //  isFeedbackExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  isExpanded: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: '',
    //  title: 'Switch to a 4-day workweek',
    //  date: "Mar 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/9.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Constructive/Development',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 7,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myFeedback',
    //  title: 'I feel challenged in my role. I love a good challenge!',
    //  date: "Apr 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/10.jpg',
    //  feedbackType: 'Coaching',
    //  jobtitle: "Sales Representative",
    //  name: 'David Martin',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 8,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: 'We have a slack channel with all the praise so the whole company can see it',
    //  date: "Dec 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/11.jpg',
    //  feedbackType: 'Recognition',
    //  jobtitle: "Sales Representative",
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 9,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: '',
    //  title: 'I feel challenged in my role. I love a good challenge',
    //  date: "May 9, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/9.jpg',
    //  jobtitle: "Project Manager",
    //  feedbackType: 'Constructive/Development',
    //  name: 'David Martin',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 10,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myFeedback',
    //  title: 'It would be cool if it was displayed on a TV screen so everyone could see',
    //  date: "Jun 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/user.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Recognition',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 11,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: 'I feel challenged in my role. I love a good challenge!',
    //  date: "Jul 9, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/3.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Constructive/Development',
    //  name: 'David Martin',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 12,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: '',
    //  title: 'Switch to a 4-day workweek',
    //  date: "Dec 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/5.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Coaching',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id:13,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myFeedback',
    //  title: 'I feel challenged in my role. I love a good challenge!',
    //  date: "Dec 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/7.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Recognition',
    //  name: 'David Martin',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id:14,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: 'We have a slack channel with all the praise so the whole company can see it',
    //  date: "Aug 5, 2023 6:45:43 PM",
    //  jobtitle: "Sales Representative",
    //  pic: 'assets/images/male/8.jpg',
    //  feedbackType: 'Appreciation',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 15,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: '',
    //  title: 'I feel challenged in my rol. I love a good challenge',
    //  date: "Sep 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/9.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Constructive/Development',
    //  name: 'Anonymous',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 16,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myFeedback',
    //  title: 'It would be cool if it was displayed on a TV screen so everyone could see',
    //  date: "Oct 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/10.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Coaching',
    //  name: 'Anonymous',
    //  to: "Louis Fuller",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
    //{
    //  id: 17,
    //  isExpanded: false,
    //  isRead: false,
    //  isFavourite: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: 'I feel challenged in my role. I love a good challenge!',
    //  date: "Nov 5, 2023 6:45:43 PM",
    //  pic: 'assets/images/male/11.jpg',
    //  jobtitle: "Sales Representative",
    //  feedbackType: 'Recognition',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "send",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},

    //{
    //  id: 18,
    //  isFeedbackExpanded: false,
    //  isRead: true,
    //  isFavourite: false,
    //  isExpanded: false,
    //  animationClass: '',
    //  isPinned: false,
    //  feedbackFrom: 'myEmployeesFeedback',
    //  title: 'We have a slack channel with all the praise so the whole comapny can see it',
    //  date: "Jan 1, 2024 6:45:43 PM",
    //  pic: 'assets/images/male/3.jpg',
    //  feedbackType: 'Constructive/Development',
    //  name: 'Louis Fuller',
    //  to: "David Martin",
    //  toType: "received",
    //  jobtitle: "Sales Representative",
    //  feedbackDesc:
    //    "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    //},
  
  ];
  addOkr: boolean = false;
  //For add okrs
 
  addOKRsClk(addOKR: any) {
    this.modalService.open(addOKR, { size: 'xl', windowClass: '', modalDialogClass: 'wd-1000' });
  }

  //For ai suggestion
  aiSuggestionClk(aiSuggestion: any) {
    this.modalService.open(aiSuggestion, { size: 'xl' });
  }

  //For pending Data
  public pendingData: any[] = [
    {
      id: 1,
      isFeedbackExpanded: false,
      isRead: true,
      isFavourite: true,
      isExpanded: false,
      animationClass: '',
      isPinned: true,
      feedbackFrom: 'myFeedback',
      to: 'David Martin ',
      name: "Louis Fuller",
      jobtitle: "Project Manager",
      title: 'I feel challenged in my role. I love a good challendge!',
      date: "Oct 8, 2024 6:45:43 PM",
      pic: 'assets/images/user.jpg',
      feedbackType: 'Recognition',
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 2,
      isFeedbackExpanded: false,
      isRead: true,
      isFavourite: false,
      isExpanded: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: 'We have a slack channel with all the praise so the whole comapny can see it',
      date: "Jan 1, 2024 6:45:43 PM",
      pic: 'assets/images/male/3.jpg',
      feedbackType: 'Constructive/Development',
      name: 'Louis Fuller',
      to: "David Martin",
      jobtitle: "Sales Representative",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 3,
      isFeedbackExpanded: false,
      isRead: false,
      isFavourite: false,
      isExpanded: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/5.jpg',
      feedbackType: 'Coaching',
      to: 'David Martin',
      name: "Louis Fuller",
      jobtitle: "Project Manager",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 4,
      isFeedbackExpanded: false,
      isRead: true,
      isFavourite: false,
      isExpanded: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myFeedback',
      title: 'It would be cool if it was displayed on a TV screen so everyone could see',
      date: "Feb 22, 2023 6:45:43 PM",
      pic: 'assets/images/male/7.jpg',
      feedbackType: 'Recognition',
      jobtitle: "Sales Representative",
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 5,
      isFeedbackExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: ' I feel challenged in my role. I love a good challenge!',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/8.jpg',
      feedbackType: 'Appreciation',
      jobtitle: "Sales Representative",
      to: 'David Martin',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 6,
      isFeedbackExpanded: false,
      isRead: false,
      isFavourite: false,
      isExpanded: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'Switch to a 4-day workweek',
      date: "Mar 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/9.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Constructive/Development',
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 7,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myFeedback',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Apr 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/10.jpg',
      feedbackType: 'Coaching',
      jobtitle: "Sales Representative",
      to: 'David Martin',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 8,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: 'We have a slack channel with all the praise so the whole company can see it',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/11.jpg',
      feedbackType: 'Recognition',
      jobtitle: "Sales Representative",
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 9,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'I feel challenged in my role. I love a good challenge',
      date: "May 9, 2023 6:45:43 PM",
      pic: 'assets/images/male/9.jpg',
      jobtitle: "Project Manager",
      feedbackType: 'Constructive/Development',
      to: 'David Martin',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 10,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myFeedback',
      title: 'It would be cool if it was displayed on a TV screen so everyone could see',
      date: "Jun 5, 2023 6:45:43 PM",
      pic: 'assets/images/user.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Recognition',
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 11,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Jul 9, 2023 6:45:43 PM",
      pic: 'assets/images/male/3.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Constructive/Development',
      to: 'David Martin',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 12,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'Switch to a 4-day workweek',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/5.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Coaching',
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 13,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myFeedback',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/7.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Recognition',
      to: 'David Martin',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 14,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: 'We have a slack channel with all the praise so the whole company can see it',
      date: "Aug 5, 2023 6:45:43 PM",
      jobtitle: "Sales Representative",
      pic: 'assets/images/male/8.jpg',
      feedbackType: 'Appreciation',
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 15,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'I feel challenged in my rol. I love a good challenge',
      date: "Sep 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/9.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Constructive/Development',
      name: 'Louis Fuller',
      to: "Anonymous",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 16,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myFeedback',
      title: 'It would be cool if it was displayed on a TV screen so everyone could see',
      date: "Oct 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/10.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Coaching',
      to: 'Anonymous',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 17,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: 'myEmployeesFeedback',
      title: 'I feel challenged in my role. I love a good challenge!',
      date: "Nov 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/11.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Recognition',
      name: 'Louis Fuller',
      to: "David Martin",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
    {
      id: 18,
      isExpanded: false,
      isRead: false,
      isFavourite: false,
      animationClass: '',
      isPinned: false,
      feedbackFrom: '',
      title: 'Switch to a 4-day workweek',
      date: "Dec 5, 2023 6:45:43 PM",
      pic: 'assets/images/male/9.jpg',
      jobtitle: "Sales Representative",
      feedbackType: 'Constructive/Development',
      to: 'Anonymous',
      name: "Louis Fuller",
      feedbackDesc:
        "An Employee Performance Review is a formal assessment process used by managers and supervisors to evaluate an employee work performance, strengths, areas for improvement, and achievements over a specific period. Performance reviews are typically conducted on a regular schedule, such as annually, semi-annually, or quarterly, depending on the organization's policies.",
    },
  ];

  public pinChanged(action: string, data: any) {
    if (action == 'Add Pin') {
      data.isPinned = true;
      data.animationClass = 'fade-in-up';
    } else if (action == 'Remove Pin') {
      data.isPinned = false;
      data.animationClass = 'fade-out-down';
    }
    setTimeout(() => {
      data.animationClass = '';
    }, 300);
  }

  //Feedbasck filter

  selectedFeedback: string = '1';
  selectedFeedbackContent: boolean = false;
  option4: boolean = true;
  option2: boolean = true;
  option3: boolean = true;

  onSelectFeedback(item: any): void {
    this.selectedFeedbackContent = item;
    item.isRead = false;
  }

  //isFavourite = false;

  //toggleFavourite(item:any): void {
  //  this.isFavourite = !this.isFavourite;
  //}

  toggleFavourite(item: any): void {
    item.isFavourite = !item.isFavourite;
  }

  //Data for OKRs, Goals, Comptencies

  Goals = [
    {
      name: 'Establish Customer Satisfaction Score',
      value: '25',
      desc: 'A person who plays or works well as a member of a team.',
    },
    {
      name: 'Create a Customer Community Strategy based on best practices',
      value: '50',
      desc: 'Their work can be stressful, as they attempt to schedule work to meet deadlines.',
    },
    {
      name: 'Produce 3 new case studies targeting new customer segments',
      value: '75',
      desc: 'A case study is a detailed story or example showcasing how a customer used the company’s product or service to solve a problem or achieve positive results. Producing three new case studies means creating three separate, detailed documents or stories.',
    },
    {
      name: 'Revise the standard sales deck and talk track to reflect updated product/offerings. ',
      value: '50',
      desc: 'The sales deck is a set of presentation slides that sales teams use to introduce and explain the company’s offerings to potential clients. Revising it involves adding or adjusting slides to ensure all the latest products, features, and value propositions are clearly and accurately presented.',
    },
    {
      name: 'Maintain a sales pipeline of qualified leads valued at least $500K quarterly',
      value: '75',
      desc: 'A sales pipeline is a visual representation of the stages that prospective customers (or "leads") move through on their way to becoming clients. Maintaining a sales pipeline means actively managing and nurturing these potential leads to keep them moving through the sales stages.',
    },
  ];
  OKRs = [
    {
      name: 'Assist in running four training sessions',
      value: '25',
      desc: 'Organizational skills refer to your ability to stay focused on different tasks, and use your time, energy, strength, mental capacity, physical space, etc. ',
    },
    {
      name: 'Maintain a max 24-hour response time in the support queue',
      value: '50',
      desc: 'Their work can be stressful, as they attempt to schedule work to meet deadlines.',
    },
    {
      name: 'Increase close rate from 22% to 27%',
      value: '75',
      desc: 'Time management is a core part of organizational skills. It includes scheduling, prioritizing, and allocating enough time for each task so that everything can be completed efficiently and on time.Effective organization involves managing your energy levels, making sure you focus on important tasks when you’re most alert, and knowing when to take breaks to avoid burnout.',
    },
  ];

  get filteredItems() {
    let items = this.cardViewData;

    if (this.selectedFeedback === '1') {
      items = items.filter((item) => item.feedbackFrom === 'myFeedback');
    } else if (this.selectedFeedback === '2') {
      items = items.filter((item) => item.feedbackFrom === 'myEmployeesFeedback');
    }

    return items.sort((a, b) => Number(b.isPinned) - Number(a.isPinned));
  }

  tab: any = 4;

  list: any = true;
  quickcreate: any;
  kanban: any;
  picktime: any;
  duedates2: NgbDateStruct | undefined;
  times = [
    { name: '12:00 AM' },
    { name: '12:30 AM' },
    { name: '01:00 AM' },
    { name: '01:30 AM' },
    { name: '02:00 AM' },
    { name: '02:30 AM' },
    { name: '03:00 AM' },
    { name: '03:30 AM' },
    { name: '04:00 AM' },
    { name: '04:30 AM' },
    { name: '05:00 AM' },
    { name: '05:30 AM' },
    { name: '06:00 AM' },
    { name: '06:30 AM' },
    { name: '07:00 AM' },
    { name: '07:30 AM' },
    { name: '08:00 AM' },
    { name: '08:30 AM' },
    { name: '09:00 AM' },
    { name: '09:30 AM' },
    { name: '10:00 AM' },
    { name: '10:30 AM' },
    { name: '11:00 AM' },
    { name: '11:30 AM' },
    { name: '12:00 PM' },
    { name: '12:30 PM' },
    { name: '01:00 PM' },
    { name: '01:30 PM' },
    { name: '02:00 PM' },
    { name: '02:30 PM' },
    { name: '03:00 PM' },
    { name: '03:30 PM' },
    { name: '04:00 PM' },
    { name: '04:30 PM' },
    { name: '05:00 PM' },
    { name: '05:30 PM' },
    { name: '06:00 PM' },
    { name: '06:30 PM' },
    { name: '07:00 PM' },
    { name: '07:30 PM' },
    { name: '08:00 PM' },
    { name: '08:30 PM' },
    { name: '09:00 PM' },
    { name: '09:30 PM' },
    { name: '10:00 PM' },
    { name: '10:30 PM' },
    { name: '11:00 PM' },
    { name: '11:30 PM' },
  ];

  get feedbackfromresult() {
    return this.feedbackfrom.filter((item) => item.checked).length;
  }
  get feedbackfromtxt() {
    return this.feedbackfrom
      .filter((item) => item.checked)
      .map((item) => item.name);
  }
  get feedbacktoresult() {
    return this.feedbackto.filter((item) => item.checked).length;
  }
  get feedbacktotxt() {
    return this.feedbackto
      .filter((item) => item.checked)
      .map((item) => item.name);
  }
  get requestedresult() {
    return this.requested.filter((item) => item.checked).length;
  }
  get requestedtxt() {
    return this.requested
      .filter((item) => item.checked)
      .map((item) => item.name);
  }
  lists: any = [
    {
      from: 'Bastin Gerald',
      fromsrc: 'assets/images/male/1.jpg',
      fromtitle: 'Head of Product',
      to: 'Marie Knight',
      tosrc: 'assets/images/male/2.jpg',
      totitle: 'Product Designer',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: 'On Sep 12, 2022 11:40 PM',
      replies: '200 • 3 Replies',
    },

    {
      from: 'Bastin Gerald',
      fromsrc: 'assets/images/male/3.jpg',
      fromtitle: 'Head of Product',
      to: 'Marie Knight',
      tosrc: 'assets/images/male/15.jpg',
      totitle: 'Product Designer',
      feedback: '',
      date: 'On Sep 12, 2022 11:40 PM',
      replies: '200 • 3 Replies',
    },

    {
      from: 'Bastin Gerald',
      fromsrc: 'assets/images/male/4.jpg',
      fromtitle: 'Head of Product',
      to: 'Marie Knight',
      tosrc: 'assets/images/male/5.jpg',
      totitle: 'Product Designer',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: 'On Sep 12, 2022 11:40 PM',
      replies: '200 • 3 Replies',
    },

    {
      from: 'Bastin Gerald',
      fromsrc: 'assets/images/male/6.jpg',
      fromtitle: 'Head of Product',
      to: 'Marie Knight',
      tosrc: 'assets/images/male/7.jpg',
      totitle: 'Product Designer',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: 'On Sep 12, 2022 11:40 PM',
      replies: '200 • 3 Replies',
    },

    {
      from: 'Bastin Gerald',
      fromsrc: 'assets/images/male/8.jpg',
      fromtitle: 'Head of Product',
      to: 'Marie Knight',
      tosrc: 'assets/images/male/9.jpg',
      totitle: 'Product Designer',
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: 'On Sep 12, 2022 11:40 PM',
      replies: '200 • 3 Replies',
    },
  ];
  feedbackfrom: any[] = [
    {
      checked: false,
      id: '001',
      name: 'Louis Fuller',
      twitter: 'lfuller@berijam.com',
      department: 'Engineering',
      pic: 'assets/images/user.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '011',
      name: 'David Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '021',
      name: 'Lachlan Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '047',
      name: 'Levi Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      checked: false,
      id: '055',
      name: 'Emily Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      checked: false,
      id: '004',
      name: 'Olivia Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '007',
      name: 'Harriso White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '008',
      name: 'Bastin Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
  ];
  feedbackto: any[] = [
    {
      checked: false,
      id: '001',
      name: 'Louis Fuller',
      twitter: 'lfuller@berijam.com',
      department: 'Engineering',
      pic: 'assets/images/user.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '011',
      name: 'David Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '021',
      name: 'Lachlan Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '047',
      name: 'Levi Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      checked: false,
      id: '055',
      name: 'Emily Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      checked: false,
      id: '004',
      name: 'Olivia Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '007',
      name: 'Harriso White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '008',
      name: 'Bastin Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
  ];
  requested: any[] = [
    {
      checked: false,
      id: '001',
      name: 'Louis Fuller',
      twitter: 'lfuller@berijam.com',
      department: 'Engineering',
      pic: 'assets/images/user.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '011',
      name: 'David Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '021',
      name: 'Lachlan Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '047',
      name: 'Levi Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      checked: false,
      id: '055',
      name: 'Emily Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      checked: false,
      id: '004',
      name: 'Olivia Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '007',
      name: 'Harriso White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      checked: false,
      id: '008',
      name: 'Bastin Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
  ];

  awardhistories: any = [
    {
      month: 'Mar- 2021',
      day: '21',
      date: 'Mar 21, 2021',
      typecolor: '#53a645',
      type: 'On time Check-in',
      value: '147',
      percentage: '59%',
      plannedvalue: '133',
      plannedpercentage: '53%',
      actualcolor: 'green',
      feeds: [
        {
          emoicons: [],
          emotext: '👍😀😇',
          awardname: 'Employee of the Month',
          awardicon: 'award-3',
          ctype: 'comment',
          type: 'On time Check-in',
          typecolor: '#53a645',
          comments10: false,
          comments11: false,
          comments12: false,
          comments13: false,
          comments18: false,
          pcube: false,
          video: false,
          value: 147,
          options: {
            showSelectionBar: true,
            floor: 0,
            ceil: 250,
            step: 1,
            minLimit: 0,
            maxLimit: 250,
          },
          changes: 'In Trouble',
          actualval: '147',
          userimg: 'assets/images/male/3.jpg',
          username: 'Ricky Martin',
          statuscolor: '#DC4926',
          status: 'At Risk',
          awardback: true,
          award: '',
          awarduser: '@Jordy Charlier',
          comment:
            'Thank you so much working with me to get customer story on the website',
          actual: '03/21/2021',
          checked: 'Mar 21, 2021 11:20 PM',
        },
      ],
    },
    {
      month: 'Mar- 2021',
      day: '21',
      date: 'Mar 21, 2021',
      typecolor: '#53a645',
      type: 'On time Check-in',
      value: '147',
      percentage: '59%',
      plannedvalue: '133',
      plannedpercentage: '53%',
      actualcolor: 'green',
      feeds: [
        {
          emoicons: [],
          emotext: '👍😀😇',
          awardname: 'Standout Performer',
          awardicon: 'award-4',
          ctype: 'comment',
          type: 'On time Check-in',
          typecolor: '#53a645',
          comments10: false,
          comments11: false,
          comments12: false,
          comments13: false,
          comments18: false,
          pcube: false,
          video: false,
          value: 147,
          options: {
            showSelectionBar: true,
            floor: 0,
            ceil: 250,
            step: 1,
            minLimit: 0,
            maxLimit: 250,
          },
          changes: 'In Trouble',
          actualval: '147',
          userimg: 'assets/images/male/4.jpg',
          username: 'John Martin',
          statuscolor: '#DC4926',
          status: 'At Risk',
          awardback: true,
          award: '',
          awarduser: '@Catherine Bourgeois',
          comment:
            'Thank you so much working with me to get customer story on the website',
          actual: '03/21/2021',
          checked: 'Mar 21, 2021 11:20 PM',
        },
      ],
    },

    {
      month: 'Mar- 2021',
      day: '21',
      date: 'Mar 21, 2021',
      typecolor: '#53a645',
      type: 'On time Check-in',
      value: '147',
      percentage: '59%',
      plannedvalue: '133',
      plannedpercentage: '53%',
      actualcolor: 'green',
      feeds: [
        {
          emoicons: [],
          emotext: '👍😀😇',
          awardname: 'Most Improved Performer',
          awardicon: 'award-4',
          ctype: 'comment',
          type: 'On time Check-in',
          typecolor: '#53a645',
          comments10: false,
          comments11: false,
          comments12: false,
          comments13: false,
          comments18: false,
          pcube: false,
          video: false,
          value: 147,
          options: {
            showSelectionBar: true,
            floor: 0,
            ceil: 250,
            step: 1,
            minLimit: 0,
            maxLimit: 250,
          },
          changes: 'In Trouble',
          actualval: '147',
          userimg: 'assets/images/male/5.jpg',
          username: 'Alice Mills',
          statuscolor: '#DC4926',
          status: 'At Risk',
          awardback: true,
          award: '',
          awarduser: '@Reinout Gerritsen',
          comment:
            'Thank you so much working with me to get customer story on the website',
          actual: '03/21/2021',
          checked: 'Mar 21, 2021 11:20 PM',
        },
      ],
    },

    {
      month: 'Mar- 2021',
      day: '21',
      date: 'Mar 21, 2021',
      typecolor: '#53a645',
      type: 'On time Check-in',
      value: '147',
      percentage: '59%',
      plannedvalue: '133',
      plannedpercentage: '53%',
      actualcolor: 'green',
      feeds: [
        {
          emoicons: [],
          emotext: '👍😀😇',
          awardname: 'High Flyer',
          awardicon: 'award-5',
          ctype: 'comment',
          type: 'On time Check-in',
          typecolor: '#53a645',
          comments10: false,
          comments11: false,
          comments12: false,
          comments13: false,
          comments18: false,
          pcube: false,
          video: false,
          value: 147,
          options: {
            showSelectionBar: true,
            floor: 0,
            ceil: 250,
            step: 1,
            minLimit: 0,
            maxLimit: 250,
          },
          changes: 'In Trouble',
          actualval: '147',
          userimg: 'assets/images/male/2.jpg',
          username: 'Zoe Lee',
          statuscolor: '#DC4926',
          status: 'At Risk',
          awardback: true,
          award: '',
          awarduser: '@Craig Lawson',
          comment:
            'Thank you so much working with me to get customer story on the website',
          actual: '03/21/2021',
          checked: 'Mar 21, 2021 11:20 PM',
        },
      ],
    },

    {
      month: 'Mar- 2021',
      day: '21',
      date: 'Mar 21, 2021',
      typecolor: '#53a645',
      type: 'On time Check-in',
      value: '147',
      percentage: '59%',
      plannedvalue: '133',
      plannedpercentage: '53%',
      actualcolor: 'green',
      feeds: [
        {
          emoicons: [],
          emotext: '👍😀😇',
          awardname: 'Growth Driver',
          awardicon: 'award-6',
          ctype: 'comment',
          type: 'On time Check-in',
          typecolor: '#53a645',
          comments10: false,
          comments11: false,
          comments12: false,
          comments13: false,
          comments18: false,
          pcube: false,
          video: false,
          value: 147,
          options: {
            showSelectionBar: true,
            floor: 0,
            ceil: 250,
            step: 1,
            minLimit: 0,
            maxLimit: 250,
          },
          changes: 'In Trouble',
          actualval: '147',
          userimg: 'assets/images/male/1.jpg',
          username: 'Marie Knight',
          statuscolor: '#DC4926',
          status: 'At Risk',
          awardback: true,
          award: '',
          awarduser: '@Marco Hofer',
          comment:
            'Thank you so much working with me to get customer story on the website',
          actual: '03/21/2021',
          checked: 'Mar 21, 2021 11:20 PM',
        },
      ],
    },
  ];

  recur: any = 1;
  recurpopupclk(recurpopup: any) {
    this.modalService.open(recurpopup, { size: 'sm' });
  }

  feedbackrequestClk(request: any) {
    this.modalService.open(request, { size: 'xl' });
  }

  feedbackgivenClk(given: any) {
    this.modalService.open(given, { size: 'xl' });
  }
  repeat: any = 1;
  video: any = 1;
  anyemployees: any = false;
  repeatval: any = false;
  addpeers: any;
  departmentsnew = [
    { checked: false, name: 'Active' },
    { checked: false, name: 'Upcoming' },
    { checked: false, name: 'Closed' },
  ];

  managers = [
    { checked: false, name: 'Standard' },
    { checked: false, name: 'Affinity' },
  ];

  atValues: any;
  hashValues: any;
  autoclose: any;
  stype: any = 1;
  schedule: any = true;
  initiateaside(initiate: any) {
    this.modalService.open(initiate, {
      size: 'xl',
      windowClass: 'asideotr',
      modalDialogClass: 'aside',
    });
  }
  scheduleclk(schedulepopup: any) {
    this.modalService.open(schedulepopup, { size: 'md' });
  }
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | undefined;
  toDate: NgbDate | null = null;
  sendmax: any = true;
  constructor(
    private modalService: NgbModal,
    //private calendar: NgbCalendar,
    private offcanvasService: NgbOffcanvas
  ) {
    //this.model = this.calendar.getToday();
    //this.fromDate = calendar.getToday();
    //this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  addmatrix: any = true;
  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
  goalcriteria: any;
  okrcriteria: any;
  and: any = true;
  activity: any;
  viewchanges: any;
  activityclk(activity: TemplateRef<any>) {
    this.offcanvasService.open(activity, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  searchTerm: string = '';
  search(value: string): void {
    this.owners = this.owners.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }
  owners: any[] = [
    {
      type: 'emp',
      id: '02',
      firstName: 'David',
      surname: 'Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '03',
      firstName: 'Lachlan',
      surname: 'Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '04',
      firstName: 'Levi',
      surname: 'Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      type: 'emp',
      id: '05',
      firstName: 'Emily',
      surname: 'Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      type: 'emp',
      id: '06',
      firstName: 'Olivia',
      surname: 'Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '07',
      firstName: 'Harriso',
      surname: 'White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '08',
      firstName: 'Bastin',
      surname: 'Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
    {
      type: 'dep',
      id: '09',
      depicon: 'wrench',
      name: 'Engineering',
      depprofile: 'assets/images/male/1.jpg',
      dephead: 'Roy Salazar',
    },
    {
      type: 'dep',
      id: '10',
      depicon: 'code-fork',
      name: 'Development',
      depprofile: 'assets/images/female/1.jpg',
      dephead: 'Betty Watson',
    },
    {
      type: 'dep',
      id: '11',
      depicon: 'archive',
      name: 'Product',
      depprofile: 'assets/images/male/2.jpg',
      dephead: 'Jeffrey Campbell',
    },
    {
      type: 'dep',
      id: '12',
      depicon: 'desktop',
      name: 'Client',
      depprofile: 'assets/images/male/3.jpg',
      dephead: 'Philip Davis',
    },
    {
      type: 'dep',
      id: '13',
      depicon: 'bug',
      name: 'Testing',
      depprofile: 'assets/images/male/4.jpg',
      dephead: 'Rose Jenkins',
    },
    {
      type: 'dep',
      id: '14',
      depicon: 'paint-brush',
      name: 'Design',
      depprofile: 'assets/images/male/5.jpg',
      dephead: 'Craig Hudson',
    },
    {
      type: 'dep',
      id: '15',
      depicon: 'gears ',
      name: 'Operations',
      depprofile: 'assets/images/male/6.jpg',
      dephead: 'Ann Stone',
    },
    {
      type: 'dep',
      id: '16',
      depicon: 'money',
      name: 'Finance',
      depprofile: 'assets/images/male/7.jpg',
      dephead: 'Megan Armstrong',
    },
    {
      type: 'dep',
      id: '17',
      depicon: 'book',
      name: 'Accounting Group',
      depprofile: 'assets/images/male/8.jpg',
      dephead: 'Elizabeth Knight',
    },
    {
      type: 'dep',
      id: '18',
      depicon: 'bank',
      name: 'Financial Management',
      depprofile: 'assets/images/male/9.jpg',
      dephead: 'Jeremy Mason',
    },
    {
      type: 'dep',
      id: '19',
      depicon: 'bullhorn',
      name: 'Marketing',
      depprofile: 'assets/images/male/10.jpg',
      dephead: 'Marie Hunt',
    },
    {
      type: 'dep',
      id: '20',
      depicon: 'desktop',
      name: 'Digital Marketing',
      depprofile: 'assets/images/male/11.jpg',
      dephead: 'Jonathan Guerrero',
    },
    {
      type: 'dep',
      id: '21',
      depicon: 'bar-chart-o',
      name: 'Sales',
      depprofile: 'assets/images/male/12.jpg',
      dephead: 'Dylan Estrada',
    },
    {
      type: 'dep',
      id: '22',
      depicon: 'hdd-o',
      name: ' Partnership Program',
      depprofile: 'assets/images/male/13.jpg',
      dephead: 'Terry Larson',
    },
    {
      type: 'dep',
      id: '23',
      depicon: 'cart-plus',
      name: 'Product Sales',
      depprofile: 'assets/images/male/14.jpg',
      dephead: 'Martha Allen',
    },
    { type: 'team', id: '24', name: 'PM Team', teamemail: 'pm@berijam.com' },
    {
      type: 'team',
      id: '25',
      name: 'Finance Team',
      teamemail: 'finance@berijam.com',
    },
    { type: 'team', id: '26', name: 'HR Team', teamemail: 'hr@berijam.com' },
    {
      type: 'team',
      id: '27',
      name: 'Engineering Team',
      teamemail: 'engineer@berijam.com',
    },
  ];
  subActive: any = 1;
  searchclk: any;
  searchclk1: any;
  give: any;
  objname: any;
  editObjname: any = 'Employee Performance Review';
  objname2: any;
  objname3: any;
  request: any;
  get ownresult() {
    return this.owners.filter((item) => item.ids).length;
  }
  owners1: any[] = [
    {
      type: 'emp',
      id: '02',
      firstName: 'David',
      surname: 'Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '03',
      firstName: 'Lachlan',
      surname: 'Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '04',
      firstName: 'Levi',
      surname: 'Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      type: 'emp',
      id: '05',
      firstName: 'Emily',
      surname: 'Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      type: 'emp',
      id: '06',
      firstName: 'Olivia',
      surname: 'Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '07',
      firstName: 'Harriso',
      surname: 'White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '08',
      firstName: 'Bastin',
      surname: 'Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
    {
      type: 'dep',
      id: '09',
      depicon: 'wrench',
      name: 'Engineering',
      depprofile: 'assets/images/male/1.jpg',
      dephead: 'Roy Salazar',
    },
    {
      type: 'dep',
      id: '10',
      depicon: 'code-fork',
      name: 'Development',
      depprofile: 'assets/images/female/1.jpg',
      dephead: 'Betty Watson',
    },
    {
      type: 'dep',
      id: '11',
      depicon: 'archive',
      name: 'Product',
      depprofile: 'assets/images/male/2.jpg',
      dephead: 'Jeffrey Campbell',
    },
    {
      type: 'dep',
      id: '12',
      depicon: 'desktop',
      name: 'Client',
      depprofile: 'assets/images/male/3.jpg',
      dephead: 'Philip Davis',
    },
    {
      type: 'dep',
      id: '13',
      depicon: 'bug',
      name: 'Testing',
      depprofile: 'assets/images/male/4.jpg',
      dephead: 'Rose Jenkins',
    },
    {
      type: 'dep',
      id: '14',
      depicon: 'paint-brush',
      name: 'Design',
      depprofile: 'assets/images/male/5.jpg',
      dephead: 'Craig Hudson',
    },
    {
      type: 'dep',
      id: '15',
      depicon: 'gears ',
      name: 'Operations',
      depprofile: 'assets/images/male/6.jpg',
      dephead: 'Ann Stone',
    },
    {
      type: 'dep',
      id: '16',
      depicon: 'money',
      name: 'Finance',
      depprofile: 'assets/images/male/7.jpg',
      dephead: 'Megan Armstrong',
    },
    {
      type: 'dep',
      id: '17',
      depicon: 'book',
      name: 'Accounting Group',
      depprofile: 'assets/images/male/8.jpg',
      dephead: 'Elizabeth Knight',
    },
    {
      type: 'dep',
      id: '18',
      depicon: 'bank',
      name: 'Financial Management',
      depprofile: 'assets/images/male/9.jpg',
      dephead: 'Jeremy Mason',
    },
    {
      type: 'dep',
      id: '19',
      depicon: 'bullhorn',
      name: 'Marketing',
      depprofile: 'assets/images/male/10.jpg',
      dephead: 'Marie Hunt',
    },
    {
      type: 'dep',
      id: '20',
      depicon: 'desktop',
      name: 'Digital Marketing',
      depprofile: 'assets/images/male/11.jpg',
      dephead: 'Jonathan Guerrero',
    },
    {
      type: 'dep',
      id: '21',
      depicon: 'bar-chart-o',
      name: 'Sales',
      depprofile: 'assets/images/male/12.jpg',
      dephead: 'Dylan Estrada',
    },
    {
      type: 'dep',
      id: '22',
      depicon: 'hdd-o',
      name: ' Partnership Program',
      depprofile: 'assets/images/male/13.jpg',
      dephead: 'Terry Larson',
    },
    {
      type: 'dep',
      id: '23',
      depicon: 'cart-plus',
      name: 'Product Sales',
      depprofile: 'assets/images/male/14.jpg',
      dephead: 'Martha Allen',
    },
    { type: 'team', id: '24', name: 'PM Team', teamemail: 'pm@berijam.com' },
    {
      type: 'team',
      id: '25',
      name: 'Finance Team',
      teamemail: 'finance@berijam.com',
    },
    { type: 'team', id: '26', name: 'HR Team', teamemail: 'hr@berijam.com' },
    {
      type: 'team',
      id: '27',
      name: 'Engineering Team',
      teamemail: 'engineer@berijam.com',
    },
  ];
  get ownresult1() {
    return this.owners1.filter((item) => item.ids).length;
  }
  giveclk(give: TemplateRef<any>) {
    this.offcanvasService.open(give, { position: 'end', panelClass: 'wd-700' });
  }

  //For pending request feedback siidepanel
  pendingRequestClk(pendingRequest: TemplateRef<any>) {
    this.offcanvasService.open(pendingRequest, { position: 'end', panelClass: 'wd-600' });
  }

  give1clk(give1: TemplateRef<any>) {
    this.offcanvasService.open(give1, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  requestclk(request: TemplateRef<any>) {
    this.offcanvasService.open(request, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  notifiyclk(notifiy: TemplateRef<any>) {
    this.offcanvasService.open(notifiy, { position: 'end', panelClass: '' });
  }
  viewchangesclk(viewchanges: TemplateRef<any>) {
    this.offcanvasService.open(viewchanges, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  okrcriteriaclk(okrcriteria: TemplateRef<any>) {
    this.offcanvasService.open(okrcriteria, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  goalcriteriaclk(goalcriteria: TemplateRef<any>) {
    this.offcanvasService.open(goalcriteria, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  dashboard1: any = false;
  dashboard2: any = false;
  dashboard3: any = false;
  model: NgbDateStruct | undefined;
  selectToday() {
    //this.model = this.calendar.getToday();
  }
  model1: NgbDateStruct | undefined;
  model2: NgbDateStruct | undefined;
  model4: NgbDateStruct | undefined;
  htmlTextnew1: any;
  model3: NgbDateStruct | undefined;

  people: any[] = [
    {
      id: '001',
      firstName: 'Louis',
      surname: 'Fuller',
      twitter: 'lfuller@berijam.com',
      department: 'Engineering',
      pic: 'assets/images/user.jpg',
      hier: 'true',
    },
    {
      id: '011',
      firstName: 'David',
      surname: 'Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/male/2.jpg',
      hier: 'true',
    },
    {
      id: '021',
      firstName: 'Lachlan',
      surname: 'Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      id: '047',
      firstName: 'Levi',
      surname: 'Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      id: '055',
      firstName: 'Emily',
      surname: 'Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      id: '004',
      firstName: 'Olivia',
      surname: 'Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      id: '007',
      firstName: 'Harriso',
      surname: 'White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      id: '008',
      firstName: 'Bastin',
      surname: 'Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
  ];

  departments: any[] = [
    {
      depicon: 'wrench',
      depname: 'Engineering',
      depprofile: 'assets/images/male/1.jpg',
      dephead: 'Roy Salazar',
    },
    {
      depicon: 'code-fork',
      depname: 'Development',
      depprofile: 'assets/images/female/1.jpg',
      dephead: 'Betty Watson',
    },
    {
      depicon: 'archive',
      depname: 'Product',
      depprofile: 'assets/images/male/2.jpg',
      dephead: 'Jeffrey Campbell',
    },
    {
      depicon: 'desktop',
      depname: 'Client',
      depprofile: 'assets/images/male/3.jpg',
      dephead: 'Philip Davis',
    },
    {
      depicon: 'bug',
      depname: 'Testing',
      depprofile: 'assets/images/male/4.jpg',
      dephead: 'Rose Jenkins',
    },
    {
      depicon: 'paint-brush',
      depname: 'Design',
      depprofile: 'assets/images/male/5.jpg',
      dephead: 'Craig Hudson',
    },
    {
      depicon: 'gears ',
      depname: 'Operations',
      depprofile: 'assets/images/male/6.jpg',
      dephead: 'Ann Stone',
    },
    {
      depicon: 'money',
      depname: 'Finance',
      depprofile: 'assets/images/male/7.jpg',
      dephead: 'Megan Armstrong',
    },
    {
      depicon: 'book',
      depname: 'Accounting Group',
      depprofile: 'assets/images/male/8.jpg',
      dephead: 'Elizabeth Knight',
    },
    {
      depicon: 'bank',
      depname: 'Financial Management',
      depprofile: 'assets/images/male/9.jpg',
      dephead: 'Jeremy Mason',
    },
    {
      depicon: 'bullhorn',
      depname: 'Marketing',
      depprofile: 'assets/images/male/10.jpg',
      dephead: 'Marie Hunt',
    },
    {
      depicon: 'desktop',
      depname: 'Digital Marketing',
      depprofile: 'assets/images/male/11.jpg',
      dephead: 'Jonathan Guerrero',
    },
    {
      depicon: 'bar-chart-o',
      depname: 'Sales',
      depprofile: 'assets/images/male/12.jpg',
      dephead: 'Dylan Estrada',
    },
    {
      depicon: 'hdd-o',
      depname: ' Partnership Program',
      depprofile: 'assets/images/male/13.jpg',
      dephead: 'Terry Larson',
    },
    {
      depicon: 'cart-plus',
      depname: 'Product Sales',
      depprofile: 'assets/images/male/14.jpg',
      dephead: 'Martha Allen',
    },
  ];
  teams: any[] = [
    { teamname: 'PM Team', teamemail: 'pm@berijam.com' },
    { teamname: 'Finance Team', teamemail: 'finance@berijam.com' },
    { teamname: 'HR Team', teamemail: 'hr@berijam.com' },
    { teamname: 'Engineering Team', teamemail: 'engineer@berijam.com' },
  ];

  model5: NgbDateStruct | undefined;
  never: any;
  su: any;
  mo: any;
  tu: any;
  we: any;
  th: any;
  fr: any;
  sa: any;
  typeActive: any = 0;
  automatic: any = true;
  self =
    "Please sign-off once you are satisfied that you have adequately assessed your manager's assessment and their overall rating and comments for you.";
  manager =
    "Please sign-off once you are satisfied that you have adequately assessed your manager's assessment and their overall rating and comments for you.";
  cycles = [
    {
      name: '90 days review',
      description:
        'This review cycle is defined as 90 days of joining employees',
    },
    {
      name: '180 days review',
      description:
        'This review cycle is defined as 180 days of joining employees',
    },
    {
      name: '1 year review',
      description:
        'This review cycle is defined as 1 year of joining employees',
    },
  ];
  standard = [
    {
      name: 'Performance Review on Mar 2021',
      type: 'Standard',
      period: 'Q1 - 2021',
      initiate: '03/01/2021',
    },
    {
      name: 'Quarter Review on Mar 2021',
      type: 'Standard',
      period: 'Q1 - 2021',
      initiate: '03/15/2021',
    },
    {
      name: 'Performance Review on Jun 2021',
      type: 'Affinity',
      period: 'Q2 - 2021',
      initiate: '06/01/2021',
    },
    {
      name: 'Performance Review on nov 2021',
      type: 'Standard',
      period: 'Q4 - 2021',
      initiate: '11/01/2021',
    },
  ];

  feedbackType: any = false;
  feedbackTypeClk() {
    this.feedbackType = !this.feedbackType;
  }

  public pendingcolumns: any[] = [
    { width: '10%', name: 'Requested by' },
    { width: '30%', name: 'Comments' },
    { width: '10%', name: 'Requested On' },
    //{ width: '10%', name: 'Status' },
    { width: '15%', name: 'Actions' },
  ];
  public pendingcolumns2: any[] = [
    { width: '10%', name: 'Requested to' },
    { width: '30%', name: 'Comments' },
    { width: '10%', name: 'Requested On' },
    { width: '10%', name: 'Status' },
    { width: '15%', name: 'Actions' },
  ];

  //For pending  received feedback
  public ReceivedFeedback: any[] = [
    {
      id: 'commantId1',
      dots: true,
      likes: '30',
      replay: '2',
      project: '1',
      url: '#/portfolio/proadmapview',
      obj: '4',
      init: '7',
      name: 'Revenue Growth',
      pic: 'assets/images/user.jpg',
      jobtitle:"Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'David Martin',
      approved: 'Marie Knight',
      date: 'Nov 10, 2024, 6:45:43 PM',
      time: '11:40 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever to",
    },
    {
      id: 'commantId2',
      likes: '50',
      replay: '4',
      project: '2',
      url: '#/portfolio/proadmapview1',
      obj: '12',
      init: '9',
      name: 'Assets Quality',
      pic: 'assets/images/male/3.jpg',
      jobtitle: "Sales Manager",
      phase: 'Prioritization',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Lachlan Martin',
      approved: 'Marie Knight',
      date: 'Nov 07, 2024, 6:45:43 PM',
      time: '10:00 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId3',
      likes: '45',
      replay: '2',
      project: '3',
      url: '#/portfolio/proadmapview',
      obj: '10',
      init: '10',
      name: 'Cost Efficiency',
      pic: 'assets/images/male/5.jpg',
      jobtitle: "Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Levi Lee',
      approved: 'Marie Knight',
      date: 'Nov 05, 2024, 6:45:43 PM',
      time: '09:45 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId4',
      dots: true,
      likes: '63',
      replay: '3',
      project: '4',
      url: '#/portfolio/proadmapview',
      obj: '8',
      init: '12',
      name: 'Diversification',
      pic: 'assets/images/male/7.jpg',
      jobtitle: "Project Manager",
      phase: 'Prioritization',
      status: 'Pending',
      color: '#D8BE65',
      submitted: 'Olivia Jones',
      approved: 'Marie Knight',
      date: 'Nov 03, 2024, 6:45:43 PM',
      time: '06:50 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId5',
      likes: '50',
      replay: '4',
      project: '2',
      url: '#/portfolio/proadmapview1',
      obj: '12',
      init: '9',
      name: 'Assets Quality',
      pic: 'assets/images/male/3.jpg',
      jobtitle: "Sales Manager",
      phase: 'Prioritization',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Lachlan Martin',
      approved: 'Marie Knight',
      date: 'Nov 07, 2024, 6:45:43 PM',
      time: '10:00 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId6',
      likes: '45',
      replay: '2',
      project: '3',
      url: '#/portfolio/proadmapview',
      obj: '10',
      init: '10',
      name: 'Cost Efficiency',
      pic: 'assets/images/male/5.jpg',
      jobtitle: "Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Levi Lee',
      approved: 'Marie Knight',
      date: 'Nov 05, 2024, 6:45:43 PM',
      time: '09:45 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId7',
      dots: true,
      likes: '63',
      replay: '3',
      project: '4',
      url: '#/portfolio/proadmapview',
      obj: '8',
      init: '12',
      name: 'Diversification',
      pic: 'assets/images/male/7.jpg',
      jobtitle: "Project Manager",
      phase: 'Prioritization',
      status: 'Pending',
      color: '#D8BE65',
      submitted: 'Olivia Jones',
      approved: 'Marie Knight',
      date: 'Nov 03, 2024, 6:45:43 PM',
      time: '06:50 PM',
      isCommentExpanded: false,
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
  ];

  //For pending sent Feedback
  public sendFeedback: any[] = [
    {
      id: 'commantId1',
      dots: true,
      likes: '30',
      replay: '2',
      project: '1',
      url: '#/portfolio/proadmapview',
      obj: '4',
      init: '7',
      name: 'Revenue Growth',
      pic: 'assets/images/user.jpg',
      jobtitle: "Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'David Martin',
      approved: 'Marie Knight',
      date: 'Nov 10, 2024, 6:45:43 PM',
      time: '11:40 PM',
      isCommentExpanded: false,
      requestStatus: "Pending",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever to",
    },
    {
      id: 'commantId2',
      likes: '50',
      replay: '4',
      project: '2',
      url: '#/portfolio/proadmapview1',
      obj: '12',
      init: '9',
      name: 'Assets Quality',
      pic: 'assets/images/male/3.jpg',
      jobtitle: "Sales Manager",
      phase: 'Prioritization',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Lachlan Martin',
      approved: 'Marie Knight',
      date: 'Nov 07, 2024, 6:45:43 PM',
      time: '10:00 PM',
      isCommentExpanded: false,
      requestStatus: "Rejected",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId3',
      likes: '45',
      replay: '2',
      project: '3',
      url: '#/portfolio/proadmapview',
      obj: '10',
      init: '10',
      name: 'Cost Efficiency',
      pic: 'assets/images/male/5.jpg',
      jobtitle: "Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Levi Lee',
      approved: 'Marie Knight',
      date: 'Nov 05, 2024, 6:45:43 PM',
      time: '09:45 PM',
      isCommentExpanded: false,
      requestStatus: "Pending",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId4',
      dots: true,
      likes: '63',
      replay: '3',
      project: '4',
      url: '#/portfolio/proadmapview',
      obj: '8',
      init: '12',
      name: 'Diversification',
      pic: 'assets/images/male/7.jpg',
      jobtitle: "Project Manager",
      phase: 'Prioritization',
      status: 'Pending',
      color: '#D8BE65',
      submitted: 'Olivia Jones',
      approved: 'Marie Knight',
      date: 'Nov 03, 2024, 6:45:43 PM',
      time: '06:50 PM',
      isCommentExpanded: false,
      requestStatus: "Rejected",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId5',
      likes: '50',
      replay: '4',
      project: '2',
      url: '#/portfolio/proadmapview1',
      obj: '12',
      init: '9',
      name: 'Assets Quality',
      pic: 'assets/images/male/3.jpg',
      jobtitle: "Sales Manager",
      phase: 'Prioritization',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Lachlan Martin',
      approved: 'Marie Knight',
      date: 'Nov 07, 2024, 6:45:43 PM',
      time: '10:00 PM',
      isCommentExpanded: false,
      requestStatus: "Rejected",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId6',
      likes: '45',
      replay: '2',
      project: '3',
      url: '#/portfolio/proadmapview',
      obj: '10',
      init: '10',
      name: 'Cost Efficiency',
      pic: 'assets/images/male/5.jpg',
      jobtitle: "Project Manager",
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Levi Lee',
      approved: 'Marie Knight',
      date: 'Nov 05, 2024, 6:45:43 PM',
      time: '09:45 PM',
      isCommentExpanded: false,
      requestStatus: "Pending",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      id: 'commantId7',
      dots: true,
      likes: '63',
      replay: '3',
      project: '4',
      url: '#/portfolio/proadmapview',
      obj: '8',
      init: '12',
      name: 'Diversification',
      pic: 'assets/images/male/7.jpg',
      jobtitle: "Project Manager",
      phase: 'Prioritization',
      status: 'Pending',
      color: '#D8BE65',
      submitted: 'Olivia Jones',
      approved: 'Marie Knight',
      date: 'Nov 03, 2024, 6:45:43 PM',
      time: '06:50 PM',
      isCommentExpanded: false,
      requestStatus: "Rejected",
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
  ];

  formcolumns: any[] = [
    { width: '20%', name: 'Feedback Title' },
    { width: '10%', name: 'Feedback Type' },
    { width: '10%', name: 'Given by' },
    { width: '10%', name: 'Received On' },
    { width: '10%', name: 'Actions' },
  ];
  formcolumns2: any[] = [
    { width: '20%', name: 'Feedback Title' },
    { width: '10%', name: 'Feedback Type' },
    { width: '10%', name: 'Given To' },
    { width: '10%', name: 'Given On' },
    { width: '10%', name: 'Actions' },
  ];
  forms: any[] = [
    {
      dots: true,
      title: 'Employee Performance Review',
      type: ' Appreciation',
      likes: '30',
      replay: '2',
      project: '1',
      url: '#/portfolio/proadmapview',
      obj: '4',
      init: '7',
      name: 'Revenue Growth',
      pic: 'assets/images/user.jpg',
      jobtitle: 'Project Manager',
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'David Martin',
      approved: 'Marie Knight',
      date: 'Nov 10, 2024',
      time: '11:40 PM',
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      title: 'Quarterly review',
      type: ' Constructive/Development ',
      likes: '50',
      replay: '4',
      project: '2',
      url: '#/portfolio/proadmapview1',
      obj: '12',
      init: '9',
      name: 'Assets Quality',
      pic: 'assets/images/male/3.jpg',
      jobtitle: 'Sales Manager',
      phase: 'Prioritization',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Lachlan Martin',
      approved: 'Marie Knight',
      date: 'Nov 07, 2024',
      time: '10:00 PM',
      comments:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ",
    },
    {
      title: 'Assessment of my direct reports',
      type: ' Coaching',
      likes: '45',
      replay: '2',
      project: '3',
      url: '#/portfolio/proadmapview',
      obj: '10',
      init: '10',
      name: 'Cost Efficiency',
      pic: 'assets/images/male/5.jpg',
      jobtitle: 'Project Manager',
      phase: 'Pipeline',
      status: 'Submitted',
      color: '#57985A',
      submitted: 'Levi Lee',
      approved: 'Marie Knight',
      date: 'Nov 05, 2024',
      time: '09:45 PM',
      comments: '',
    },
    {
      dots: true,
      title: 'Assessment of my indirect team members',
      type: ' Recognition',
      likes: '63',
      replay: '3',
      project: '4',
      url: '#/portfolio/proadmapview',
      obj: '8',
      init: '12',
      name: 'Diversification',
      pic: 'assets/images/male/7.jpg',
      jobtitle: 'Team Lead',
      phase: 'Prioritization',
      status: 'Pending',
      color: '#D8BE65',
      submitted: 'Olivia Jones',
      approved: 'Marie Knight',
      date: 'Nov 03, 2024',
      time: '06:50 PM',
      comments: '',
    },
  ];
  owners2: any[] = [
    {
      type: 'emp',
      id: '02',
      firstName: 'David',
      surname: 'Martin',
      twitter: 'dmartin@berijam.com',
      department: 'Client',
      pic: 'assets/images/user.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '03',
      firstName: 'Lachlan',
      surname: 'Martin',
      twitter: 'lmartin@berijam.com',
      department: 'Product',
      pic: 'assets/images/male/3.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '04',
      firstName: 'Levi',
      surname: 'Lee',
      twitter: 'levilee@berijam.com',
      department: 'Development',
      pic: 'assets/images/male/5.jpg',
    },
    {
      type: 'emp',
      id: '05',
      firstName: 'Emily',
      surname: 'Smith',
      twitter: 'emily-smith@berijam.com',
      department: 'Marketing',
      pic: 'assets/images/male/6.jpg',
    },
    {
      type: 'emp',
      id: '06',
      firstName: 'Olivia',
      surname: 'Jones',
      twitter: 'olivia-jones@berijam.com',
      department: 'Financial Management',
      pic: 'assets/images/male/7.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '07',
      firstName: 'Harriso',
      surname: 'White',
      twitter: 'harriso90@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/9.jpg',
      hier: 'true',
    },
    {
      type: 'emp',
      id: '08',
      firstName: 'Bastin',
      surname: 'Gerald',
      twitter: 'bgerald@berijam.com',
      department: 'Digital Marketing',
      pic: 'assets/images/male/10.jpg',
    },
  ];
  automatic1: any = true;

  value1: any = '1';
  value2: any = '1';
  goalscadences: any = true;
  months = [
    {
      name: 'Jan 2021',
      active: false,
      reviews: [{ name: 'Performance Review Jan 2021' }],
    },
    {
      name: 'Feb 2021',
      active: false,
      reviews: [{ name: 'Performance Review Feb 2021' }],
    },
    {
      name: 'Mar 2021',
      active: true,
      reviews: [
        { name: 'Performance Review Mar 2021' },
        { name: 'Quarterly Review Mar 2021' },
      ],
    },
    {
      name: 'Apr 2021',
      active: false,
      reviews: [{ name: 'Performance Review Apr 2021' }],
    },
    {
      name: 'May 2021',
      active: false,
      reviews: [{ name: 'Performance Review May 2021' }],
    },
    {
      name: 'Jun 2021',
      active: true,
      reviews: [{ name: 'Performance Review Jun 2021' }],
    },
    {
      name: 'Jul 2021',
      active: false,
      reviews: [{ name: 'Performance Review Jul 2021' }],
    },
    {
      name: 'Aug 2021',
      active: false,
      reviews: [{ name: 'Performance Review Aug 2021' }],
    },
    {
      name: 'Sep 2021',
      active: false,
      reviews: [{ name: 'Performance Review Sep 2021' }],
    },
    {
      name: 'Oct 2021',
      active: false,
      reviews: [{ name: 'Performance Review Oct 2021' }],
    },
    {
      name: 'Nov 2021',
      active: true,
      reviews: [{ name: 'Performance Review Nov 2021' }],
    },
    {
      name: 'Dec 2021',
      active: false,
      reviews: [{ name: 'Performance Review Dec 2021' }],
    },
  ];
  comps = [
    {
      name: 'Delivery & Proactiveness',
      desc: 'A person who plays or works well as a member of a team.',
    },
    {
      name: 'Thinking & Analysis Style',
      desc: 'Their work can be stressful, as they attempt to schedule work to meet deadlines.',
    },
    {
      name: 'Collaboration & Leadership',
      desc: 'Organizational skills refer to your ability to stay focused on different tasks, and use your time, energy, strength, mental capacity, physical space, etc. ',
    },
    {
      name: 'Relationship & Stakeholder Alignment',
      desc: 'Technical skills are the abilities and knowledge needed to perform specific tasks.',
    },
    {
      name: 'Communication & Interaction',
      desc: 'You use when organizing other people to reach a shared goal.',
    },
    {
      name: 'Technical Capabilities',
      desc: 'Communicate Better with Your Coworkers.',
    },
    {
      name: 'Result Focused',
      desc: 'The ability to take initiative and ownership and deliver on commitments and expectations without impacting safety of employees or the quality of work',
    },
    {
      name: 'Execution Management',
      desc: 'The ability to manage overarching projects / teams by deploying available resources optimally, setting operational goals in order to ensure exceptional delivery while balancing competing considerations like budget, timeline & safety',
    },
  ];

  selcomps = [
    {
      name: 'Delivery & Proactiveness',
      value: '25',
      desc: 'A person who plays or works well as a member of a team.',
    },
    {
      name: 'Thinking & Analysis Style',
      value: '50',
      desc: 'Their work can be stressful, as they attempt to schedule work to meet deadlines.',
    },
    {
      name: 'Collaboration & Leadership',
      value: '75',
      desc: 'Organizational skills refer to your ability to stay focused on different tasks, and use your time, energy, strength, mental capacity, physical space, etc. ',
    },
    {
      name: 'Delivery & Proactiveness',
      value: '25',
      desc: 'A person who plays or works well as a member of a team.',
    },
    {
      name: 'Thinking & Analysis Style',
      value: '50',
      desc: 'Their work can be stressful, as they attempt to schedule work to meet deadlines.',
    },
    {
      name: 'Collaboration & Leadership',
      value: '75',
      desc: 'Organizational skills refer to your ability to stay focused on different tasks, and use your time, energy, strength, mental capacity, physical space, etc. ',
    },
  ];

  autocalculate: any = true;
  taskpriorities = [
    { open: false, color: '#dc3545', name: 'Short Form', toggle: true },
    { open: false, color: '#ffc107', name: 'Long Form', toggle: true },
  ];
  rates = [
    {
      open: false,
      formula: 'Sum of competencies rating / Count of competencies',
      name: 'Competency Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: 'Sum of goals rating / Count of goals',
      name: 'Goal Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: 'Sum of OKR rating / Count of OKRs',
      name: 'OKR Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: 'Q & A Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: 'Sum of potential rating / Count of potentials',
      name: 'Potential Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: 'Rating Matches Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: "Self's Overall Rating",
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: "Manager's Overall Rating",
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: "Secondary Reviewer's Rating",
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: 'Out of Score',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: 'Overall Percentage',
      toggle: true,
      delete: true,
    },
    {
      open: false,
      formula: '',
      name: 'System Score',
      toggle: true,
      delete: true,
    },
  ];
  showpeers: any;
  questypes: any = true;
  createnew: any;
  createcycle: any;
  date: any = 1;
  editcycle: any;
  createcycleclk(createcycle: TemplateRef<any>) {
    this.offcanvasService.open(createcycle, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  //for ai suggestion
  //aiSuggestionClk(createcycle: TemplateRef<any>) {
  //  this.offcanvasService.open(createcycle, { position: 'end', panelClass: 'wd-600' });
  //}


  checkhistories1: any = [
    {
      date: "31 - Mar - 2023", p: "24.45", a: "22", d: "2.45", single: true, comments: "", open: true, title: "Current Check-in", color: "#53C7D8",
      items: [
        { rolled: true, name: "David Martin", img: "assets/images/male/1.jpg", date: "03/31/2023 11:45PM (On Time)", status: "On Track", statuscolor: "#53C7D8", actual: "22", delta: "1", comment: "Status 'In Trouble' to 'On Track'" },
        { rolled: true, name: "Peter Sanders", img: "assets/images/user.jpg", date: "03/31/2023 11:45PM (On Time)", status: "In Trouble", statuscolor: "#D85353", actual: "21", delta: "0.2", comment: "Status 'At Risk' to 'In Trouble'" },
        { rolled: true, name: "Zoe Lee", img: "assets/images/male/3.jpg", date: "03/31/2023 11:45PM (On Time)", status: "At Risk", statuscolor: "#E47C1B", bubblecolor: "#AC5B10", actual: "20.8", delta: "0.3", comment: "Status 'On Track' to 'At Risk'" },
        { moved: true, name: "William Smith", img: "assets/images/male/4.jpg", date: "03/31/2023 11:45PM (On Time)", status: "At Risk", statuscolor: "#E47C1B", bubblecolor: "#AC5B10", actual: "20.5", delta: "0.5", comment: "Status 'On Track' to 'At Risk'" },
        { created: true, name: "Alice Mills", img: "assets/images/male/5.jpg", date: "03/31/2023 11:45PM (On Time)", status: "On Track", statuscolor: "#53C7D8", actual: "20", delta: "1", comment: "Status 'At Risk' to 'On Track'" }
      ]
    },
  ]

  aiData: Array<any> = [
    { title: "Go Live Profit.co Academy with 6 courses", content: "This will be rolled over to the next quarter" },
    { title: "Increase # of Videos recorded from 0 to  6 (Phase 1 Courses" },

  ]

  editcycleclk(editcycle: TemplateRef<any>) {
    this.offcanvasService.open(editcycle, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  selfoptions: any;

  manageroptions: any;
  fmanageroptions: boolean | undefined;
  bmanageroptions: boolean | undefined;
  employeesignoff: boolean | undefined;
  hrsignoff: boolean | undefined;
  peeroptions: boolean | undefined;
  skiplevel: boolean | undefined;
  othereportees: boolean | undefined;
  oneoptions: boolean | undefined;
  customizeemail: boolean | undefined;
  external: any;
  initiatereview: any;

  customizeemailclk(customizeemail: TemplateRef<any>) {
    this.offcanvasService.open(customizeemail, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  initiatereviewclk(initiatereview: TemplateRef<any>) {
    this.offcanvasService.open(initiatereview, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  selfoptionsclk(selfoptions: TemplateRef<any>) {
    this.offcanvasService.open(selfoptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  manageroptionsclk(manageroptions: TemplateRef<any>) {
    this.offcanvasService.open(manageroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  fmanageroptionsclk(fmanageroptions: TemplateRef<any>) {
    this.offcanvasService.open(fmanageroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  advselfoptions: any;
  advmanageroptions: any;
  advfmanageroptions: any;
  advpeeroptions: any;

  advselfoptionsclk(advselfoptions: TemplateRef<any>) {
    this.offcanvasService.open(advselfoptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  advfmanageroptionsclk(advfmanageroptions: TemplateRef<any>) {
    this.offcanvasService.open(advfmanageroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  advpeeroptionsclk(advpeeroptions: TemplateRef<any>) {
    this.offcanvasService.open(advpeeroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  advmanageroptionsclk(advmanageroptions: TemplateRef<any>) {
    this.offcanvasService.open(advmanageroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  roaster: any = 'option1';
  visible1: any = false;
  visible2: any = true;
  bucketoptions: any;

  bmanageroptionsclk(bmanageroptions: TemplateRef<any>) {
    this.offcanvasService.open(bmanageroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }
  employeesignoffclk(employeesignoff: TemplateRef<any>) {
    this.offcanvasService.open(employeesignoff, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  bucketoptionsclk(bucketoptions: TemplateRef<any>) {
    this.offcanvasService.open(bucketoptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  hrsignoffclk(hrsignoff: TemplateRef<any>) {
    this.offcanvasService.open(hrsignoff, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  peeroptionsclk(peeroptions: TemplateRef<any>) {
    this.offcanvasService.open(peeroptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  externalclk(external: TemplateRef<any>) {
    this.offcanvasService.open(external, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  oneoptionsclk(oneoptions: TemplateRef<any>) {
    this.offcanvasService.open(oneoptions, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  skiplevelclk(skiplevel: TemplateRef<any>) {
    this.offcanvasService.open(skiplevel, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  otherreporteesclk(othereportees: TemplateRef<any>) {
    this.offcanvasService.open(othereportees, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  calibrationclk(calibration: TemplateRef<any>) {
    this.offcanvasService.open(calibration, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  st5: any = true;

  groups = [
    { name: 'Manager - Support', members: '10', open: false },
    { name: 'Support Engineer', members: '20', open: false },
    { name: 'Senior Support Engineer', members: '15', open: false },
    { name: 'Admin Assistant', members: '7', open: false },
  ];

  jobtitles = [
    { selected: false, id: 'bl', name: '(Blank)' },
    { selected: false, id: 'ce', name: 'Chief Executive Officer ' },
    { selected: false, id: 'hm', name: 'HR Manager' },
    { selected: false, id: 'ac', name: 'Accountant' },
    { selected: false, id: 'se', name: 'Service Manager' },
  ];
  roles = [
    { selected: false, id: 'bl2', name: '(Blank)' },
    { selected: false, id: 'notstarted', name: 'Super User' },
    { selected: false, id: 'scheduled', name: 'Profit Manager' },
    { selected: false, id: 'inprogress', name: 'Profit User' },
  ];
  employees = [
    {
      selected: false,
      id: 'lm',
      name: 'Lachlan Martin',
      img: 'images/male/1.jpg',
    },
    {
      selected: false,
      id: 'mn',
      name: 'Marie Knight',
      img: 'images/male/2.jpg',
    },
    { selected: false, id: 'zl', name: 'Zoe Lee', img: 'images/male/3.jpg' },
  ];

  loginstatus = [
    { selected: false, id: 'enable', name: 'Enabled' },
    { selected: false, id: 'disable', name: 'Disabled' },
    { selected: false, id: 'lock', name: 'Locked' },
    { selected: false, id: 'invite', name: 'Invited' },
  ];
  dropColokr(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.process, event.previousIndex, event.currentIndex);
  }
  reqexten: any;
  reqextenClk(reqexten: TemplateRef<any>) {
    this.offcanvasService.open(reqexten, {
      position: 'end',
      panelClass: 'wd-600',
    });
  }

  users = [
    {
      status: 'On Track',
      goal: 'Close 30 support tickets for this quarter',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '57%',
      board: 'Development',
      userno: '1001',
      nookrs: '3',
      okrname: 'Build Strategic partners',
      krname: '',
      nokrs: '6',
      pendingcheck: '2',
      ontrack: '1',
      atrisk: '3',
      introuble: '1',
      completed: '1',
      okrscore: '50%',
      reset: '2',
      userimg: 'bastin.png',
      fname: 'Bastin',
      lname: 'Gerald',
      email: 'bgerald@example.com ',
      manager: '',
      department: '',
      jobtitle: 'Chief Executive Officer',
      fulfill: '30%',
      rating: '5',
      p1: '4',
      p2: '4',
      p3: '2',
      p4: '2',
      performance: '4',
      potential: '3',
      privilege: 'Super User',
      total: '12',
      review1submit: true,
      review1tool: 'Submitted: Bastin Gerald',
      value: '',
      answer:
        'I demonstrated initiative when I wrote three additional blog posts this quarter. I displayed leadership skills when I led the engineering team through a feature release. I demonstrated my collaboration skills by planning the holiday party with a full committee.',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      lstatus: 'locked1',
      board: 'Product',
      status: 'On Track',
      goal: 'Shorten average software development schedules by > 35.0%',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '44%',
      userno: '1002',
      nookrs: '2',
      pendingcheck: '1',
      ontrack: '1',
      atrisk: '1',
      introuble: '0',
      completed: '0',
      okrscore: '30%',
      reset: '1',
      userimg: 'user.jpg',
      okrname: 'Improve my brand position',
      krname: '',
      nokrs: '4',
      fname: 'Louis',
      lname: 'Fuller',
      email: 'lfuller@berijam.com',
      manager: 'Bastin Gerald',
      secondary: 'Lachlan Martin',
      department: 'Product Team',
      jobtitle: 'Chief Financial Officer',
      fulfill: '90%',
      rating: '2',
      p1: '4',
      p2: '3',
      p3: '3',
      p4: '10',
      performance: '3.8',
      potential: '3',
      privilege: 'Profit Manager',
      total: '20',
      review1submit: true,
      review1tool: 'Submitted: Louis Fuller',
      review2img: 'assets/images/bastin.png',
      review2submit: true,
      review2tool: 'Submitted: Bastin Gerald',
      review3img: 'assets/images/male/2.jpg',
      review3submit: true,
      review3tool: 'Submitted: David Martin',
      review4img: 'assets/images/male/3.jpg',
      review4submit: true,
      review4tool: 'Submitted: James Martin',
      answer:
        'I recognize that I could improve the way I run meetings, which I plan to do by coming up with more focused agendas. I know I need to speak up during brainstorms. I’m going to start planning ideas ahead of time so I feel more prepared.',
      value: '',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      lstatus: 'invitesent',
      status: 'Not Started',
      goal: 'Improve work hours per function point',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '0%',
      board: 'Marketing',
      userno: '1003',
      nookrs: '0',
      pendingcheck: '2',
      ontrack: '0',
      atrisk: '0',
      introuble: '0',
      completed: '0',
      okrscore: '0%',
      reset: '0',
      userimg: 'male/1.jpg',
      okrname: 'Improve ROI on Retail Stores',
      krname: '',
      nokrs: '0',
      fname: 'David  ',
      lname: 'Martin',
      email: 'dmartin@berijam.com',
      manager: 'Bastin Gerald',
      secondary: 'Lachlan Martin',
      department: 'Product Team ',
      jobtitle: 'Financial Manager',
      fulfill: '80%',
      rating: '2',
      p1: '3',
      p2: '3',
      p3: '5',
      p4: '18',
      performance: '3.6',
      potential: '3',
      privilege: 'Profit Manager',
      review1submit: true,
      review1tool: 'Submitted: David Martin',
      total: '29',
      review2img: 'assets/images/bastin.png',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/4.jpg',
      review3decline: true,
      review3tool: 'Declined: David Martin',
      review4img: 'assets/images/male/5.jpg',
      review4tool: 'Not Submitted: James Martin',
      value: '',
      answer:
        'I need to set up multiple goal checkpoints, in order to meet all the objectives. I would love to see you continuing to push back on anything you don’t feel sets our team up for success .',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      lstatus: 'disabled',
      status: 'In Trouble',
      goal: 'Reduce the odds of cost overruns',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '85%',
      board: 'Sales',
      userno: '1004',
      nookrs: '1',
      pendingcheck: '1',
      ontrack: '0',
      atrisk: '1',
      introuble: '0',
      completed: '0',
      okrscore: '30%',
      reset: '0',
      userimg: 'male/2.jpg',
      okrname: 'Increase Market Share in EMEA Region',
      krname: '',
      nokrs: '4',
      fname: 'Lachlan',
      lname: 'Martin',
      email: 'lmartin@berijam.com',
      manager: 'Louis Fuller',
      secondary: 'Zoe Lee',
      department: 'Product Team ',
      jobtitle: 'HR Manager',
      fulfill: '70%',
      rating: '3',
      p1: '3',
      p2: '4',
      p3: '3',
      p4: '10',
      performance: '3.7',
      potential: '3',
      privilege: 'Profit User',
      total: '20',
      review1submit: true,
      review1tool: 'Submitted: Lachlan Martin',
      review2img: 'assets/images/male/1.jpg',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/5.jpg',
      review3submit: true,
      review3tool: 'Submitted: David Martin',
      review4img: 'assets/images/male/6.jpg',
      review4submit: true,
      review4tool: ' Submitted: James Martin',
      review5img: 'assets/images/male/7.jpg',
      review5tool: 'Not Submitted: James Martin',
      value: '',
      answer:
        'I need to show more composure in stressful situations. To do this, I’m going to practice mindfulness and step away from my desk when I feel overwhelmed. I know that I interrupt others unintentionally. I’ve asked my team to gently let me know when I do this so I can be more aware of my actions.',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      lstatus: 'locked2',
      status: 'At Risk',
      goal: 'Lower the risk of project failure or cancellation',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '68%',
      board: 'Product',
      userno: '1005',
      nookrs: '2',
      pendingcheck: '1',
      ontrack: '1',
      atrisk: '1',
      introuble: '0',
      completed: '0',
      okrscore: '30%',
      reset: '1',
      userimg: 'male/3.jpg',
      okrname: 'Reducing Bug Count',
      krname: '',
      nokrs: '10',
      fname: 'William',
      lname: 'King',
      email: 'william.king@example.com',
      manager: 'Daniel Smith',
      secondary: 'John Doe',
      department: 'Product Team',
      jobtitle: 'Accountant',
      fulfill: '50%',
      rating: '4',
      p1: '2',
      p2: '1',
      p3: '7',
      p4: '25',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit Manager',
      total: '35',
      review1submit: true,
      review1tool: 'Submitted: William King',
      review2img: 'assets/images/male/2.jpg',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/4.jpg',
      review3decline: true,
      review3tool: 'Declined: David Martin',
      review4img: 'assets/images/male/6.jpg',
      review4submit: true,
      review4tool: ' Submitted: James Martin',
      review5img: 'assets/images/male/7.jpg',
      review5tool: 'Not Submitted: James Martin',
      value: '',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      status: 'At Risk',
      goal: 'Eliminate security flaws in all software applications',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '48%',
      board: 'Design',
      userno: '1006',
      nookrs: '1',
      pendingcheck: '1',
      ontrack: '0',
      atrisk: '0',
      introuble: '1',
      completed: '0',
      okrscore: '50%',
      reset: '0',
      userimg: 'male/4.jpg',
      okrname: 'Reducing Waiting Time For User',
      krname: '',
      nokrs: '5',
      fname: 'Levi',
      lname: 'Lee',
      email: 'levilee@example.com',
      manager: 'Riley Smith',
      secondary: 'Marie Knight',
      department: 'Product Team',
      jobtitle: 'HR Assistant',
      fulfill: '30%',
      rating: '5',
      p1: '7',
      p2: '3',
      p3: '0',
      p4: '0',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit User',
      total: '10',
      review1submit: true,
      review1tool: 'Submitted: Levi Lee',
      review2img: 'assets/images/male/3.jpg',
      review2submit: true,
      review2tool: 'Submitted: Bastin Gerald',
      review3img: 'assets/images/male/4.jpg',
      review3submit: true,
      review3tool: 'Submitted: David Martin',
      review4img: 'assets/images/male/6.jpg',
      review4submit: true,
      review4tool: ' Submitted: James Martin',
      review5img: 'assets/images/male/7.jpg',
      review5submit: true,
      review5tool: ' Submitted: James Martin',
      value: '',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      status: 'In Trouble',
      goal: 'Lower cost of quality (COQ) from > 45.0% ',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '75%',
      board: 'Development',
      userno: '1007',
      nookrs: '2',
      pendingcheck: '1',
      ontrack: '0',
      atrisk: '1',
      introuble: '1',
      completed: '0',
      okrscore: '20%',
      reset: '1',
      userimg: 'male/5.jpg',
      okrname: 'Improve Customer Service',
      krname: '',
      nokrs: '8',
      fname: 'Emily  ',
      lname: 'Smith',
      email: 'emily-smith@example.com',
      manager: 'Riley Smith',
      department: 'Sales Team',
      secondary: 'Zoe Lee',
      jobtitle: 'SVP of Sales',
      fulfill: '70%',
      rating: '3',
      p1: '50',
      p2: '10',
      p3: '5',
      p4: '5',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit User',
      total: '70',
      review1submit: true,
      review1tool: 'Submitted: Emily Smith',
      review2img: 'assets/images/male/4.jpg',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/8.jpg',
      review3pending: true,
      review3tool: 'Pending Approval: David Martin',
      review4img: 'assets/images/male/7.jpg',
      review4pending: true,
      review4tool: 'Pending Approval: James Martin',
      review5img: 'assets/images/male/6.jpg',
      review5pending: true,
      review5tool: 'Pending Approval: James Martin',
      value: '',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      status: 'On Track',
      goal: 'Raise defect removal efficiency (DRE) ',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '68%',
      board: 'Testing',
      userno: '1008',
      nookrs: '2',
      pendingcheck: '1',
      ontrack: '1',
      atrisk: '1',
      introuble: '0',
      completed: '0',
      okrscore: '30%',
      reset: '1',
      userimg: 'male/6.jpg',
      okrname: 'Increase Revenue Channels in EMEA',
      krname: '',
      nokrs: '10',
      fname: 'Olivia ',
      lname: 'Jones',
      email: 'olivia-jones@example.com',
      manager: 'Harrison Kelly',
      secondary: 'Zoe Lee',
      department: 'Sales Team',
      review1submit: true,
      review1tool: 'Submitted: Olivia Jones',
      review2img: 'assets/images/male/5.jpg',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/10.jpg',
      review3decline: true,
      review3tool: 'Declined: David Martin',
      review4img: 'assets/images/male/11.jpg',
      review4notsubmit: true,
      review4tool: 'Not Submitted: James Martin',
      review5img: 'assets/images/male/12.jpg',
      review5submit: true,
      review5tool: 'Submitted: James Martin',
      jobtitle: 'Sales Manager',
      fulfill: '70%',
      rating: '3',
      p1: '35',
      p2: '25',
      p3: '5',
      p4: '5',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit User',
      value: '',
      total: '70',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      status: 'Completed',
      goal: 'Improve work hours per function point',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '45%',
      board: 'Development',
      userno: '1009',
      nookrs: '2',
      pendingcheck: '1',
      ontrack: '1',
      atrisk: '1',
      introuble: '0',
      completed: '0',
      okrscore: '10%',
      reset: '1',
      userimg: 'male/7.jpg',
      okrname: '',
      krname: 'Increase our Advisors NPS with Clients',
      nokrs: '6',
      fname: 'Grace  ',
      lname: 'Williams',
      email: 'lucas.morton@example.com',
      manager: 'Olivia Lee',
      secondary: 'Zoe Lee',
      department: 'Service Team',
      review1submit: true,
      review1tool: 'Submitted: Grace Williams',
      review2img: 'assets/images/male/6.jpg',
      review2tool: 'Not Submitted: Bastin Gerald',
      review2pending: true,
      review3img: 'assets/images/male/11.jpg',
      review3decline: true,
      review3tool: 'Declined: David Martin',
      review4img: 'assets/images/male/12.jpg',
      review4tool: 'Not Submitted: James Martin',
      review5img: 'assets/images/male/13.jpg',
      review5submit: true,
      review5tool: ' Submitted: James Martin',
      jobtitle: 'Service Manager',
      fulfill: '30%',
      rating: '5',
      p1: '5',
      p2: '4',
      p3: '3',
      p4: '18',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit Read Only User',
      value: '',
      total: '30',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        showTicks: true,
        floor: 0,
        ceil: 5,
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
    {
      status: 'At Risk',
      goal: 'Shorten average software development schedules',
      due: 'Jan 01 - Mar 31, 2021',
      progress: '35%',
      board: 'Marketing',
      userno: '1010',
      nookrs: '3',
      pendingcheck: '2',
      ontrack: '1',
      atrisk: '1',
      introuble: '1',
      completed: '0',
      okrscore: '65%',
      reset: '1',
      userimg: 'male/8.jpg',
      okrname: '',
      krname:
        'Increase Potential Revenue in the Sales Pipeline from $20K to $35K',
      nokrs: '6',
      fname: 'Harriso    ',
      lname: 'White',
      secondary: 'Zoe Lee',
      email: 'harriso90@example.com ',
      manager: 'Olivia Lee      ',
      department: 'Service Team',
      review1submit: true,
      review1tool: 'Submitted: Harriso White',
      review2img: 'assets/images/male/7.jpg',
      review2tool: 'Submitted: Bastin Gerald',
      review3img: 'assets/images/male/12.jpg',
      review3decline: true,
      review3tool: 'Declined: David Martin',
      review4img: 'assets/images/male/11.jpg',
      review4submit: true,
      review4tool: ' Submitted: James Martin',
      review5img: 'assets/images/male/10.jpg',
      review5tool: 'Not Submitted: James Martin',

      jobtitle: 'Service Representative',
      fulfill: '70%',
      rating: '3',
      p1: '2',
      p2: '5',
      p3: '3',
      p4: '10',
      performance: '3.5',
      potential: '3',
      privilege: 'Profit Read Only User',
      value: '',
      total: '20',
      answer: 'I am able to complete the given tasks before the deadline',
      options: {
        stepsArray: [
          '',
          'Unsatisfactory',
          'Needs Improvement',
          'Satisfactory',
          'Commendable',
          'Outstanding',
        ],
        step: 1,
        dimension: '%',
        showSelectionBar: true,
      },
    },
  ];
  fulfillments = [
    {
      fromto: '0 - 39',
      color: '#00b894',
      ratingcode: '1',
      ratingvalue: 'Excellent',
      ratingfrom: '5',
      ratingto: '10',
    },
    {
      fromto: '40 - 64',
      color: '#00cdc8',
      ratingcode: '2',
      ratingvalue: 'Very Good',
      ratingfrom: '15',
      ratingto: '20',
    },
    {
      fromto: '65 - 84',
      color: '#fdcb6e',
      ratingcode: '3',
      ratingvalue: 'Good',
      ratingfrom: '45',
      ratingto: '35',
    },
    {
      fromto: '85 - 100',
      color: '#e17055',
      ratingcode: '4',
      ratingvalue: 'Fair',
      ratingfrom: '25',
      ratingto: '15',
    },
    {
      fromto: '101 - 125',
      color: '#d63031',
      ratingcode: '5',
      ratingvalue: 'Poor',
      ratingfrom: '10',
      ratingto: '20',
    },
  ];
  recurringconfig: any = true;
  calibration: any;
  inidate: any = 1;
  additional: any = true;
  continous: any = true;
  affinity: any = true;
  employee: any;
  showokr: any = true;
  usersearch: any;
  newstatus: any;
  newrow: any;
  open: any;
  formula: any = 1;
  color: any = '#2196f3';
  autoapprove: any;
  showreviewsummary: any;
  reviewhistory: any;
  Restriction: any;
  review: any;
  searching: any;
  reviewrating = [
    {
      color: '#58bc8a',
      name: 'Outstanding',
      score: '5',
      description:
        'Employee consistently and significantly exceeds job expectations and standards and demonstrates a high degree of initiative, customer service, and quality of work.',
    },
    {
      color: '#9ace69',
      name: 'Commendable',
      score: '4',
      description:
        'Employee meets and frequently exceeds job expectations and standards and demonstrates a high degree of initiative, customer service, and quality of work.',
    },
    {
      color: '#ffeb3c',
      name: 'Satisfactory',
      score: '3',
      description:
        'Employee meets the expectations and standards  of the employee’s job in a fully adequate way.',
    },
    {
      color: '#febb50',
      name: 'Needs Improvement',
      score: '2',
      description:
        'Employee meets many of the  expectations of the job in a satisfactory manner but often fails to  adequately meet some of the expectations or standards. Improvement is required. ',
    },
    {
      color: '#fc8b65',
      name: 'Unsatisfactory',
      score: '1',
      description:
        'Employee fails to meet many  job expectations and standards. Performance deficiencies must be corrected. ',
    },
  ];
  objstatuses1 = [
    {
      objstat: true,
      color: '#47aaf9',
      name: 'Not Started',
      code: 'NS',
      value: '0',
    },
    {
      objstat: true,
      color: '#1ebac7',
      name: 'On Track',
      code: 'OT',
      value: '90',
    },
    {
      objstat: true,
      color: '#DC4926',
      name: 'In Trouble',
      code: 'IT',
      value: '10',
    },
    {
      objstat: true,
      color: '#FCA016',
      name: 'At Risk',
      code: 'AR',
      value: '30',
    },
    {
      lock: true,
      objstat: true,
      color: '#16a085',
      name: 'Completed',
      code: 'CO',
      value: '100',
    },
    {
      objstat: true,
      color: '#777777',
      name: 'Archived',
      code: 'AC',
      value: '0',
    },
  ];
  reviewstatuses = [
    { color: '#3498db', name: 'Self Assessment', code: 'SA', value: '0' },
    { color: '#f1c40f', name: '360 Assessment', code: 'TA', value: '90' },
    {
      color: '#2c3e50',
      name: 'Manager-Employee Review',
      code: 'MJ',
      value: '10',
    },
    { color: '#2ecc71', name: 'Completed', code: 'PD', value: '0' },
    { color: '#e83030', name: 'Unresponded-Closed', code: 'PD', value: '0' },
  ];
  connectors = [
    {
      kpi: 'Average Tickets Per Customer',
      name: 'Total leads created by month',
      description:
        'This KPI presents an absolute number of leads generated each month.',
      value: '0',
    },
    {
      kpi: 'First Contact Resolution Rate',
      name: 'Total opportunities opened by month',
      description:
        'This KPIs is the absolute number of leads that turned into opportunities each month.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Overall Support Volume',
      name: 'Total Opportunities Won by Month',
      description:
        'This KPI reflects the number of opportunities that turned into paying customers each month.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Handling Time',
      name: ' Lead to Opportunity conversion rate',
      description:
        'This KPI reflects the percentage of leads that turned into opportunities each month.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Time To Resolution',
      name: ' Opportunity to Won opportunity conversion rate',
      description:
        'This KPI reflects the percentage of opportunities that turned into paying customers each month.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Backlog',
      name: ' Average Contract Value',
      description: 'This KPI represents the average value of each sale.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Customer Retention Rate',
      name: 'Emails sent',
      description:
        'This KPI represents the absolute number of emails sent during the outbound lead generation.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Customer Satisfaction Score',
      name: 'Outbound calls',
      description:
        'This KPI represents the absolute number of calls made during the outbound lead generation.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Reopen Rate',
      name: 'Number of Opens per Campaign',
      description:
        'The email open counter measures the total number of people who open an email from an outbound approach.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Support Queue Count',
      name: 'Open rate per campaign',
      description:
        'The email open rate measures the percentage of people who open an email from an outbound approach.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Handling Time',
      name: 'Number of responses received',
      description:
        'The number of receivers who replied out of the total number of send emails.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Backlog',
      name: 'Number of responses received',
      description:
        'The number of receivers who replied out of the total number of send emails.',
      code: 'OT',
      value: '90',
    },
  ];
  connectors1 = [
    {
      kpi: 'Average Wait Time',
      name: '% Time Spent in Fixing Bugs',
      description: 'This KPI presents the average time spent in fixing bugs.',
      value: '0',
    },
    {
      kpi: 'Test Coverage',
      name: 'Number of Bugs per user story',
      description: 'This KPIs presents the number of bugs per user story..',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Average Time to Resolution',
      name: 'Average Time Spent in Bugs',
      description: 'This KPI presents the percentage of resolution time.',
      code: 'OT',
      value: '90',
    },
    {
      kpi: 'Reopen Rate',
      name: '% Bugs Reopened',
      description: 'This KPI presents the reopened bugs',
      code: 'OT',
      value: '90',
    },
  ];
  reviewstatuses1 = [
    { color: '#3498db', name: 'Not Started', code: 'UC', value: '0' },
    { color: '#ef63d0', name: 'Prepared', code: 'DC', value: '90' },
    { color: '#ffa24e', name: 'Scheduled', code: 'IP', value: '10' },
    { color: '#2ecc71', name: 'Completed', code: 'PD', value: '0' },
  ];
  inistatuses = [
    { color: 'rgb(71, 170, 249)', name: 'Not Started', code: 'NS', value: '0' },
    {
      color: 'rgb(220, 73, 38)',
      name: 'Ongoing - Delayed',
      code: 'OT',
      value: '90',
    },
    {
      color: 'rgb(255, 185, 47)',
      name: 'Ongoing - Ontime',
      code: 'IT',
      value: '10',
    },
    { color: 'rgb(30, 186, 199)', name: 'Completed', code: 'CO', value: '100' },
  ];
  initcategory = [
    { name: 'Strategic', code: 'NS', value: '0' },
    { name: 'Legal', code: 'OT', value: '90' },
  ];
  initwave = [
    { name: 'Wave 1', type: 'Immediate Term', from: '2019', to: '2020' },
    { name: 'Wave 2', type: 'Short Term', from: '2019', to: '2019' },
    { name: 'Wave 3', type: 'Medium Term ', from: '2019', to: '2020' },
  ];
  affinities = [
    { color: 'rgb(71, 170, 249)', name: 'Not Related', weightage: '1' },
    { color: 'rgb(220, 73, 38)', name: 'Somewhat Related', weightage: '2' },
    { color: '#ffa24e', name: 'Reasonably Related', weightage: '4' },
    { color: '#2ecc71', name: 'Closely Related', weightage: '8' },
  ];

  custom: any;
  showokrs: any = true;
  affinity1: any = true;
  affinitynew: any = true;
  newlvl: any;
  info6: any;
  info1: any;
  info2: any;
  info3: any;
  info4: any;
  info5: any;
  period: any = 'quarter';
  standardreview: any = true;

  process: any[] = [
    {
      type: 'standard',
      name: 'Self Assessment',
      enable: true,
      participants: 'Employee',
    },
    {
      type: 'standard',
      name: 'Peer Assessment',
      enable: true,
      participants: 'Custom List',
    },
    {
      type: 'standard',
      name: 'External Reviewers Assessment',
      enable: true,
      participants: 'External Reviewers',
    },
    // { type: "standard", name: "Reportees Assessment", enable: true, participants: "Reportees" },
    {
      type: 'standard',
      name: 'Manager Assessment',
      enable: true,
      participants: 'Manager',
    },
    {
      type: 'Functional',
      name: 'Additional/Matrix Manager Assessment',
      enable: true,
      participants: 'Manager',
    },
    // { type: "Business", name: "Business Manager Assessment", enable: true, participants: "Manager" },
    // { type: "standard", name: "1:1 Assessment", enable: true, participants: "Employee, Manager" },
    {
      type: 'standard',
      name: 'Secondary Reviewer Assessment',
      enable: true,
      participants: "Manager's Manager",
    },
    {
      type: 'standard',
      name: 'Employee Sign-off',
      enable: true,
      participants: 'Employee',
    },
    { type: 'standard', name: 'HR Sign-off', enable: true, participants: 'HR' },
    // { type: "standard", name: "Calibration", enable: true, participants: "Calibration Group" }
  ];
  assessments: any[] = [
    { selected: false, id: 'as1a', name: 'Self Assessment' },
    { selected: false, id: 'as2', name: 'Other Reportees Assessment ' },
    { selected: false, id: 'as3', name: 'Manager Assessment' },
    { selected: false, id: 'as4', name: 'Secondary Reviewer Assessment' },
    { selected: false, id: 'as5', name: 'Employee Sign-off' },
    { selected: false, id: 'as6', name: 'HR Sign-off' },
  ];
  assessments2: any[] = [
    { selected: false, id: 'as1a2', name: 'Self Assessment' },
    { selected: false, id: 'as22', name: 'Other Reportees Assessment ' },
    { selected: false, id: 'as32', name: 'Manager Assessment' },
    { selected: false, id: 'as42', name: 'Secondary Reviewer Assessment' },
    { selected: false, id: 'as52', name: 'Employee Sign-off' },
    { selected: false, id: 'as62', name: 'HR Sign-off' },
  ];

  assessments3: any[] = [
    { selected: false, id: 'as1a3', name: 'Self Assessment' },
    { selected: false, id: 'as23', name: 'Other Reportees Assessment ' },
    { selected: false, id: 'as33', name: 'Manager Assessment' },
    { selected: false, id: 'as43', name: 'Secondary Reviewer Assessment' },
    { selected: false, id: 'as53', name: 'Employee Sign-off' },
    { selected: false, id: 'as63', name: 'HR Sign-off' },
  ];

  assessments4: any[] = [
    { selected: false, id: 'as1a4', name: 'Self Assessment' },
    { selected: false, id: 'as24', name: 'Other Reportees Assessment ' },
    { selected: false, id: 'as34', name: 'Manager Assessment' },
    { selected: false, id: 'as44', name: 'Secondary Reviewer Assessment' },
    { selected: false, id: 'as54', name: 'Employee Sign-off' },
    { selected: false, id: 'as64', name: 'HR Sign-off' },
  ];

  assessments5: any[] = [
    { selected: false, id: 'as1a5', name: 'Self Assessment' },
    { selected: false, id: 'as25', name: 'Other Reportees Assessment ' },
    { selected: false, id: 'as35', name: 'Manager Assessment' },
    { selected: false, id: 'as45', name: 'Secondary Reviewer Assessment' },
    { selected: false, id: 'as55', name: 'Employee Sign-off' },
    { selected: false, id: 'as65', name: 'HR Sign-off' },
  ];

  public commantId: string = 'commantId1';

  ngOnInit(): void {
    this.selectedFeedbackContent = this.cardViewData.find(item => item.id === 1);
  }

  currentshow1: any = true;
  pastshow1: any = true;
  upcomingshow1: any = true;
  customshow: any = true;
  range1: any = [
    { checked: false, id: 'we', name: 'Q1 - 2023' },
    { checked: false, id: 'kk', name: 'Q2 - 2023' },
    { highlight: 'active', checked: false, id: 'rt', name: 'Q3 - 2023' },
    { checked: false, id: 'cd', name: 'Q4 - 2023 ' },
    // { checked: false, id: "we", name: "Annual - 2021" },
    // { checked: false, id: "we", name: "Annual - 2022" },
    // { checked: false, id: "we", name: "Annual - 2023" },
    // { checked: false, id: "we", name: "Annual - 2024" },
    { checked: false, id: 'we', name: 'Custom Range' },
  ];
  current1: any = [
    // { checked: false, id: "we", name: "Annual - 2023", month: "Jan 01 - Dec 31" },
    { checked: false, id: 'we', name: 'Q1 - 2023', month: 'Jan 01 - Mar 31' },
    { checked: false, id: 'kk', name: 'Q2 - 2023', month: 'Apr 01 - Jun 30' },
    {
      highlight: 'active',
      checked: true,
      id: 'rt',
      name: 'Q3 - 2023',
      month: 'Jul 01 - Sep 30',
    },
    { checked: false, id: 'cd', name: 'Q4 - 2023 ', month: 'Oct 01 - Dec 31' },
  ];
  past: any = [
    // { checked: false, id: "we", name: "Annual - 2022", month: "Jan 01 - Dec 31" },
    { checked: false, id: 'ot', name: 'Q1 - 2022', month: 'Jan 01 - Mar 31' },
    { checked: false, id: 'it', name: 'Q2 - 2022', month: 'Apr 01 - Jun 30' },
    { checked: false, id: 'ar', name: 'Q3 - 2022', month: 'Jul 01 - Sep 30' },
    { checked: false, id: 'c', name: 'Q4 - 2022 ', month: 'Oct 01 - Dec 31' },
  ];

  accesslistenable: any;
  past1: any = [
    {
      name: 'Q3 | Performance Appraisal',
      period: 'Q3-2023',
      rating: [
        { name: 'Overall Percentage', rating: '91%' },
        { name: "Manager's Overall Rating", rating: '4.7/5' },
        { name: 'Self’s Overall Score', rating: '4.1/5' },
      ],
    },
    {
      name: 'Q2 | ARR related evaluation...',
      period: 'Q2-2023',
      rating: [
        { name: 'Overall Percentage', rating: '93%' },
        { name: "Manager's Overall Rating", rating: '4.5/5' },
        { name: 'Self’s Overall Score', rating: '3.1/5' },
      ],
    },
    {
      name: 'Q1 | Performance Review',
      period: 'Q1-2023',
      rating: [
        { name: 'Overall Percentage', rating: '100%' },
        { name: "Manager's Overall Rating", rating: '4.7/5' },
        { name: 'Self’s Overall Score', rating: '5/5' },
      ],
    },
    {
      name: '2022 Annual Review',
      period: 'Annual-2023',
      rating: [
        { name: 'Overall Percentage', rating: '95%' },
        { name: "Manager's Overall Rating", rating: '4.7/5' },
        { name: 'Self’s Overall Score', rating: '3.1/5' },
      ],
    },
  ];
  upcoming: any = [
    // { checked: false, id: "we", name: "Annual - 2024", month: "Jan 01 - Dec 31" },
    { checked: false, id: 'ot', name: 'Q1 - 2024', month: 'Jan 01 - Mar 31' },
    { checked: false, id: 'it', name: 'Q2 - 2024', month: 'Apr 01 - Jun 30' },
    { checked: false, id: 'ar', name: 'Q3 - 2024', month: 'Jul 01 - Sep 30' },
    { checked: false, id: 'c', name: 'Q4 - 2024 ', month: 'Oct 01 - Dec 31' },
  ];

  // custom: any = [
  //   // { checked: false, id: "we", name: "Annual - 2024" },
  //   { checked: false, id: "ot", name: "Q1 - 2024" },
  //   { checked: false, id: "it", name: "Q2 - 2024" },
  //   { checked: false, id: "ar", name: "Q3 - 2024" },
  //   { checked: false, id: "c", name: "Q4 - 2024 " },

  // ]
  comrnts: any;
  depselecteditem: any = 'Profit.co OKRs';
  goingwell: any = true;
  viewActivemydep: any = 1;
  filter: any = 3;
  savefilter: any = true;
  tagfilter: any;
  statusFilter: any = true;
  feedbackTypeFilter: any;
  addfilter: any;
  ownerfilter: any;
  viewActive: any = 1;
  viewsActive: any = 1;
  feedbackviewsActive: any = 1;

  savefilterclk(savefilterpop: any) {
    this.modalService.open(savefilterpop, { size: 'md' });
  }

  editfilterclk(editfilter: any) {
    this.modalService.open(editfilter, { size: 'md' });
  }
  showhideclk(showhide: any) {
    this.modalService.open(showhide, { size: 'md' });
  }

  kanbans = [
    {
      name: 'Appreciation',
      count: '2',
      color: '#c2c2c2',
      addidea: true,
      tasks: [
        {
          type: 'bug',
          ideaid: '2352',
          users: false,
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'Technology',
          user: 'assets/images/male/3.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Employee Performance Review',
          color: '#f1f6ff',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '2452',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/1.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Establish Customer Satisfaction Score',
          color: '#e4eee4',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '2',
        },
        {
          type: 'tasks',
          ideaid: '5474',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Technology',
          user: 'assets/images/male/2.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Quarterly review',
          color: '#bd0e4d50',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '1',
        },
      ],
    },
    {
      name: 'Constructive/Development',
      count: '10',
      color: '#0e54bd',
      tasks: [
        {
          type: 'tasks',
          ideaid: '5732',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'HR',
          user: 'assets/images/male/3.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Assessment of my direct reports',
          color: '#e4eee4',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
        },
        {
          type: 'tasks',
          ideaid: '8433',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/4.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Assessment of my indirect team members',
          color: 'fff8ee',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '2',
        },
        {
          type: 'bug',
          ideaid: '5737',
          users: true,
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Technology',
          user: 'assets/images/male/5.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Assist in running four training sessions',
          color: '#f1f6ff',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '2',
        },
        {
          type: 'bug',
          ideaid: '5678',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'HR',
          user: 'assets/images/male/6.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Establish Customer Satisfaction Score',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'bug',
          ideaid: '8945',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/7.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Employee Performance Review',
          color: 'fff8ee',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '8843',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'Technology',
          user: 'assets/images/male/8.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Quarterly review',
          duedate: 'Aug 20, 2024',
          color: '#e4eee4',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '6783',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Administration',
          user: 'assets/images/male/10.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Assessment of my direct reports',
          duedate: 'Aug 20, 2024',
          color: '#bd0e4d50',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '7533',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/11.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Assessment of my indirect team members',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '2345',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Technology',
          user: 'assets/images/male/12.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Define the relationship between resources and business systems.',
          color: '#e4eee4',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
          tags: [
            { name: 'Product', color: 'rgb(182, 207, 245)' },
            { name: 'Sales Support', color: 'rgb(242, 178, 168)' },
            { name: 'Test Analysis', color: 'rgb(251, 233, 131)' },
          ],
        },
        {
          type: 'story',
          ideaid: '3335',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'HR',
          user: 'assets/images/male/4.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Identify event sources by resource type',
          color: 'fff8ee',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '2354',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'Administration',
          user: 'assets/images/male/3.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Define the relationship between resources and business systems.',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/7.jpg',
            },
          ],
          priority: 'High',
          status: 'Completed',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '7344',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Operations',
          user: 'assets/images/male/2.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Identify event sources by resource type',
          color: '#f1f6ff',
          duedate: 'Aug 20, 2024',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '7885',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'Technology',
          user: 'assets/images/male/3.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Set up and test jobs to replicate events to the history server.',
          color: '#bd0e4d50',
          duedate: 'Aug 20',
          assignee: [
            {
              name: 'Louis Fuller',
              email: 'lfuller@berijam.com',
              img: 'assets/images/user.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
        {
          type: 'bug',
          ideaid: '1345',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/3.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Monitor system performance and adjust hardware as required.',
          color: 'fff8ee',
          duedate: 'Sep 15',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/3.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '2354',
          users: true,
          description: '',
          impactarea: 'HR',
          user: 'assets/images/male/4.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Monitor system performance and adjust hardware as required.',
          color: '#e4eee4',
          duedate: '01/15/2021',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/3.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
        },
      ],
    },
    {
      name: 'Coaching',
      count: '4',
      color: '#018e3b',
      tasks: [
        {
          approved: true,
          type: 'story',
          ideaid: '5673',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/2.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Configure the instance placement.',
          color: '#e4eee4',
          duedate: 'Aug 11',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/5.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
          tags: [
            { name: 'Sales Support', color: 'rgb(242, 178, 168)' },
            { name: 'Test Analysis', color: 'rgb(251, 233, 131)' },
          ],
        },
      ],
    },
    {
      name: 'Recognition',
      count: '1',
      color: '#e4941b',
      tasks: [
        {
          implemented: true,
          type: 'bug',
          ideaid: '7678',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Technology',
          user: 'assets/images/male/6.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Monitor system performance and adjust hardware as required.',
          color: '#f1f6ff',
          duedate: 'Jul 21',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/3.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
        },
      ],
    },
    {
      name: 'Performance Feedback',
      count: '1',
      color: '#e5325c',
      tasks: [
        {
          type: 'bug',
          ideaid: '2356',
          description:
            'Share marketing trends, case studies of successful campaigns, and host webinars on specific marketing strategies (e.g., social media marketing for B2B companies). ',
          impactarea: 'Operations',
          user: 'assets/images/male/6.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Monitor system performance and adjust hardware as required.',
          color: '#f1f6ff',
          duedate: 'Jul 21',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/3.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
        },
        {
          type: 'story',
          ideaid: '3456',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures. ',
          impactarea: 'Technology',
          user: 'assets/images/male/4.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Identify event sources by resource type',
          color: 'fff8ee',
          duedate: '',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/10.jpg',
            },
          ],
          priority: 'Medium',
          status: 'In Progress',
          krs: '3',
        },
      ],
    },
    {
      name: 'Behavioural Feedback',
      count: '1',
      color: '#e4941b',
      tasks: [
        {
          implemented: true,
          type: 'bug',
          ideaid: '7678',
          description:
            'Encourage employees to submit ideas for process improvement, product development, and cost-saving measures.',
          impactarea: 'Technology',
          user: 'assets/images/male/6.jpg',
          subtasks: false,
          comment: false,
          assignedto: false,
          name: 'Monitor system performance and adjust hardware as required.',
          color: '#f1f6ff',
          duedate: 'Jul 21',
          assignee: [
            {
              name: 'David Martin',
              email: 'dmartin@berijam.com',
              img: 'assets/images/male/1.jpg',
            },
            {
              name: 'Zoe Lee',
              email: 'zlee@berijam.com',
              img: 'assets/images/male/3.jpg',
            },
          ],
          priority: 'High',
          status: 'Scheduled',
          krs: '3',
        },
      ],
    },
  ];

  kanbansnew: any = [
    {
      name: 'NOT STARTED',
      color: '#c0392b',
      tasks: [{}],
    },
    {
      name: 'SCHEDULED',
      color: '#e67e22',
      tasks: [{}],
    },
    {
      name: 'IN PROGRESS',
      color: '#2980b9',
      tasks: [{}],
    },
    {
      name: 'COMPLETED',
      color: '#16a085',
      tasks: [{}],
    },
  ];
  showMore = false;

  onShow() {
    this.showMore = !this.showMore;
  }
  exporttxt: any = 'Initialization';
  step1active: any = true;
  step2active: any = false;
  step3active: any = false;
  step4active: any = false;
  exportstep() {
    setTimeout(() => {
      this.exporttxt = 'Data Processing';
      this.step1active = true;
      this.step2active = true;
      this.step3active = false;
      this.step4active = false;
    }, 1000);
    setTimeout(() => {
      this.exporttxt = 'File Generation';
      this.step1active = true;
      this.step2active = true;
      this.step3active = true;
      this.step4active = false;
    }, 2000);
    setTimeout(() => {
      this.exporttxt = 'Download Complete';
      this.step1active = true;
      this.step2active = true;
      this.step3active = true;
      this.step4active = true;
    }, 3000);
  }
  exporthistoryclk(exporthistory: TemplateRef<any>) {
    this.offcanvasService.open(exporthistory, {
      position: 'end',
      panelClass: 'wd-700',
    });
  }

  selectall: any;
  singleselect: any = true;
  ischecked: boolean = false;
  checkAllTrades: boolean = false;
  trade: any;
  trades: any;
  multicheck: any;
  alertlistmsg: any;
  get locationresult() {
    return this.tags.filter((item: { checked: any }) => item.checked).length;
  }
  get locationresulttxt() {
    return this.tags
      .filter((item: { checked: any }) => item.checked)
      .map((item: { name: any }) => item.name);
  }

  tasktrack: any;
  get locationresultcheckin() {
    return this.tagscheckin.filter((item: { checked: any }) => item.checked)
      .length;
  }
  get locationresulttxt11() {
    return this.tagscheckin
      .filter((item: { checked: any }) => item.checked)
      .map((item: { name: any }) => item.name);
  }

  tagscheckin: any = [
    { color: '#1abc9c', checked: true, id: '12', name: 'On Time' },
    { color: '#2980b9', checked: true, id: '11', name: 'Missed' },
    { color: '#8e44ad', checked: true, id: 'd', name: 'Late' },
    { color: '#e67e22', checked: false, id: 'e', name: 'Future' },
    { color: '#c0392b', checked: false, id: 's', name: 'Not Applicable' },
  ];

  tags: any = [
    { color: '#1abc9c', checked: false, id: '12', name: 'Product Development' },
    { color: '#2980b9', checked: false, id: '11', name: 'Carry Forward' },
    { color: '#8e44ad', checked: false, id: 'd', name: 'Design' },
    { color: '#e67e22', checked: false, id: 'e', name: 'Engineering' },
    { color: '#c0392b', checked: false, id: 's', name: 'Sales' },
    { color: '#2c3e50', checked: false, id: 'm', name: 'Marketing' },
    { color: '#1abc9c', checked: false, id: '14', name: 'Admin' },
    { color: '#2980b9', checked: false, id: '25', name: 'HR Administrations' },
    { color: '#8e44ad', checked: false, id: '8', name: 'Customer Success' },
    { color: '#e67e22', checked: false, id: '8', name: 'Service' },
    { color: '#c0392b', checked: false, id: '5', name: 'Support' },
    { color: '#2c3e50', checked: false, id: '2', name: 'Product Marketing' },
  ];

  reviewclk(review: TemplateRef<any>) {
    this.offcanvasService.open(review, {
      position: 'end',
      panelClass: 'wd-1000',
      backdrop: false,
    });
  }

  replay: any;
  revreplayclk(replay: TemplateRef<any>) {
    this.offcanvasService.open(replay, {
      position: 'end',
      panelClass: 'wd-600',
      //backdrop: false,
    });
  }

  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  checked: any;
  checked2: any;
  checked3: any;
  status4: any = 1;
  inactive: any = 3;
  inactive2: any = 3;
  inactive3: any = 3;
  datedrop: any = 1;
  notifications: any = [
    {
      active: true,
      src: 'assets/images/male/1.jpg',
      user: 'Roger Smith',
      message:
        'has checked-in for key result Generate at least 50K New visitors through blogs every month',
      okrname: 'Produce and rollout amazing content to drive traffic',
      time: '2m',
    },
    {
      active: false,
      src: 'assets/images/male/2.jpg',
      user: 'Jim wan',
      message:
        'updated the key result Invite at least 50 prospects from Enterprise & SMB for the event for the objective Build solid pipeline through in-person events.',
      krname: 'Generate 300 MQLs from Webinars',
      time: '12m',
    },
    {
      active: true,
      src: 'assets/images/male/3.jpg',
      user: 'Nisha Joseph',
      message: 'has rejected an assigned key result, from',
      highlight: 'Design File - Final Project.',
      krname: 'Increase Inbound Demo Success',
      time: '29m',
    },
    {
      active: true,
      src: 'assets/images/male/4.jpg',
      user: 'Abhishek Jacob',
      message:
        'has checked in on a key result that depends on another Key result.',
      krname: 'Increase Inbound Demo to trial conversion from 0 to 240',
      time: '24h',
      krstatus: 'On Track',
      actual: '7%',
      plan: '75%',
      comment: "Status 'Not Started' to 'On Track' changed",
      acceptdecline: true,
    },
    {
      active: false,
      src: 'assets/images/male/1.jpg',
      user: 'Roger Smith',
      message:
        'has checked-in for key result Generate at least 50K New visitors through blogs every month',
      okrname: 'Produce and rollout amazing content to drive traffic',
      time: '2m',
    },
    {
      active: false,
      src: 'assets/images/male/2.jpg',
      user: 'Jim wan',
      message:
        'updated the key result Invite at least 50 prospects from Enterprise & SMB for the event for the objective Build solid pipeline through in-person events.',
      krname: 'Generate 300 MQLs from Webinars',
      time: '12m',
    },
    {
      active: false,
      src: 'assets/images/male/3.jpg',
      user: 'Nisha Joseph',
      message: 'has rejected an assigned key result, from',
      highlight: 'Design File - Final Project.',
      krname: 'Increase Inbound Demo Success',
      time: '29m',
    },
    {
      active: false,
      src: 'assets/images/male/4.jpg',
      user: 'Abhishek Jacob',
      message:
        'has checked in on a key result that depends on another Key result.',
      krname: 'Increase Inbound Demo to trial conversion from 0 to 240',
      time: '24h',
      krstatus: 'On Track',
      actual: '7%',
      plan: '75%',
      comment: "Status 'Not Started' to 'On Track' changed",
      acceptdecline: true,
    },
  ];

  public changeEmployee(employee: any) {
    //this.tab2Title$.next(employee == 'All' ? 'My Employee' : employee);
  }

  public openRejectModal(template: TemplateRef<any>) {
    this.modalService.open(template, { size: 'md' });
  }

  public openEditFeedBack(give: TemplateRef<any>) {
    this.owners[0]['ids'] = true;
    this.offcanvasService.open(give, { position: 'end', panelClass: 'wd-600' });
  }

  
}
