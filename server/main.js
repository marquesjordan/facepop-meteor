import { Meteor } from 'meteor/meteor';
import {Emails} from '../imports/api/emails.js';
import {Surveys} from '../imports/api/surveys.js';
import {Vips} from '../imports/api/vip.js';
import { Investors } from '../imports/api/investors.js';

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
  })
});
