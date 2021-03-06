import { Meteor } from 'meteor/meteor';
import {Emails} from '../imports/api/emails.js';
import {Surveys} from '../imports/api/surveys.js';
import {Vips} from '../imports/api/vip.js';
import { Investors } from '../imports/api/investors.js';
import { Questions } from '../imports/api/questions.js';
import { Answers } from '../imports/api/answers.js';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('surveys', function() {
    return Surveys.find({});
  });
  Meteor.publish('vips', function() {
    return Vips.find({});
  });
  Meteor.publish('investors', function() {
    return Investors.find({});
  });
  Meteor.publish('questions', function() {
    return Questions.find({});
  });
  Meteor.publish('answers', function() {
    return Answers.find({});
  });
  Meteor.publish('emails', function() {
    return Emails.find({});
  });
});
