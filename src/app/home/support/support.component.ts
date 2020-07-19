import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public appFAQItems = [
    {
      question: 'What should I do if Neutrify stops working?',
      answer: 'Firstly, check your devices\' connection. You can\'t grab new articles without one. Secondly, close the app and reopen it. '
      + 'If the problem persists, send an email to customer support with details of your issue.'
    },
    {
      question: 'I\'m trying to create an account but the details I have entered are invalid. What should I do?',
      answer: 'Make sure you don\'t already have an account under that email address. Also ensure your password is at least 7 characters in length '
      + 'and you have included one uppercase letter and one number. If you still are having problems, please contact customer support.'
    },
    {
      question: 'I can\'t find the verification email. Where is it?',
      answer: 'Please check to see if the email is in your junk/spam folder. If you still cannot see it, ensure your email service does not block emails sent from Amazon SES. '
      + 'If the problem persists, please contact customer support.'
    },
    {
      question: 'Which devices can run the Neutrify app?',
      answer: 'Any phone or tablet that runs Android 5 or iOS 11 and above. You can also open neutrify in your web browser to get an almost identical experience.'
    },
    {
      question: 'Where is the filter menu?',
      answer: 'You can find the filter menu by tapping the icon in the top left of your screen.'
    },
    {
      question: 'Do I always have to open the filter menu to add filters?',
      answer: 'No. You can also add filters by tapping on any of the words found on the right most slide of a news article.'
    },
    {
      question: 'Why can\'t I read the whole article in the Neutrify app?',
      answer: 'News aggregators occupy a grey area in the law where it is not entirely clear whether or '
      + 'not republishing the full body of an article infringes on the copyright of original publisher. '
      + 'In order to mitigate any disputes surrounding this, Neutrify chooses to only display a limited amount of the article body '
      + 'and clearly displays a button that sends a reader to the original publisher.'
    },
    {
      question: 'Sometimes my filters aren\'t behaving properly. Why is that?',
      answer: 'Neutrify classifies an articles\' topics and keywords using an AI technique called machine learning. ' 
      + 'This means that the classifications are not always 100% accurate. If you find articles that should have been excluded from the news feed, ' 
      + 'the best way to remove them is to open the article and find a keyword that you can add to your filters. Using a combination of keywords and topics '
      + 'often gives the best results.'
    },
  ];

}
