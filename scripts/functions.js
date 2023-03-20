////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.asm = {};

endpoint.asm.suppressions = {};

endpoint.asm.suppressions.global = {};

endpoint.asm.groups = {};

endpoint.user = {};

endpoint.user.webhooks = {};

endpoint.user.webhooks.parse = {};

endpoint.user.webhooks.parse.settings = {};

endpoint.user.webhooks.parse.stats = {};

endpoint.user.webhooks.event = {};

endpoint.user.webhooks.event.test = {};

endpoint.user.webhooks.event.settings = {};

endpoint.user.settings = {};

endpoint.user.settings.enforcedTls = {};

endpoint.user.scheduledSends = {};

endpoint.user.profile = {};

endpoint.user.email = {};

endpoint.user.password = {};

endpoint.user.username = {};

endpoint.user.credits = {};

endpoint.user.account = {};

endpoint.whitelabel = {};

endpoint.whitelabel.domains = {};

endpoint.whitelabel.domains.subuser = {};

endpoint.whitelabel.domains.default = {};

endpoint.whitelabel.links = {};

endpoint.whitelabel.links.default = {};

endpoint.whitelabel.links.subuser = {};

endpoint.whitelabel.ips = {};

endpoint.contactdb = {};

endpoint.contactdb.recipients = {};

endpoint.contactdb.recipients.count = {};

endpoint.contactdb.recipients.search = {};

endpoint.contactdb.recipients.billableCount = {};

endpoint.contactdb.lists = {};

endpoint.contactdb.customFields = {};

endpoint.contactdb.segments = {};

endpoint.contactdb.reservedFields = {};

endpoint.contactdb.status = {};

endpoint.ips = {};

endpoint.ips.pools = {};

endpoint.ips.warmup = {};

endpoint.ips.remaining = {};

endpoint.ips.assigned = {};

endpoint.suppression = {};

endpoint.suppression.blocks = {};

endpoint.suppression.bounces = {};

endpoint.suppression.invalidEmails = {};

endpoint.suppression.spamReports = {};

endpoint.suppression.unsubscribes = {};

endpoint.scopes = {};

endpoint.scopes.requests = {};

endpoint.marketing = {};

endpoint.marketing.contacts = {};

endpoint.marketing.contacts.exports = {};

endpoint.marketing.contacts.imports = {};

endpoint.marketing.contacts.count = {};

endpoint.marketing.contacts.search = {};

endpoint.marketing.segments = {};

endpoint.marketing.singlesends = {};

endpoint.marketing.lists = {};

endpoint.marketing.senders = {};

endpoint.marketing.fieldDefinitions = {};

endpoint.mailSettings = {};

endpoint.mailSettings.plainContent = {};

endpoint.mailSettings.template = {};

endpoint.mailSettings.forwardSpam = {};

endpoint.mailSettings.forwardBounce = {};

endpoint.mailSettings.footer = {};

endpoint.mailSettings.addressWhitelist = {};

endpoint.mailSettings.spamCheck = {};

endpoint.mailSettings.bouncePurge = {};

endpoint.mailSettings.bcc = {};

endpoint.teammates = {};

endpoint.teammates.pending = {};

endpoint.trackingSettings = {};

endpoint.trackingSettings.click = {};

endpoint.trackingSettings.subscription = {};

endpoint.trackingSettings.googleAnalytics = {};

endpoint.trackingSettings.open = {};

endpoint.categories = {};

endpoint.categories.stats = {};

endpoint.categories.stats.sums = {};

endpoint.accessSettings = {};

endpoint.accessSettings.activity = {};

endpoint.accessSettings.whitelist = {};

endpoint.subusers = {};

endpoint.subusers.stats = {};

endpoint.subusers.stats.monthly = {};

endpoint.subusers.stats.sums = {};

endpoint.subusers.reputations = {};

endpoint.messages = {};

endpoint.messages.download = {};

endpoint.mail = {};

endpoint.mail.batch = {};

endpoint.mail.send = {};

endpoint.partnerSettings = {};

endpoint.partnerSettings.newRelic = {};

endpoint.browsers = {};

endpoint.browsers.stats = {};

endpoint.devices = {};

endpoint.devices.stats = {};

endpoint.templates = {};

endpoint.campaigns = {};

endpoint.alerts = {};

endpoint.apiKeys = {};

endpoint.clients = {};

endpoint.clients.stats = {};

endpoint.geo = {};

endpoint.geo.stats = {};

endpoint.mailboxProviders = {};

endpoint.mailboxProviders.stats = {};

endpoint.senders = {};

endpoint.v3 = {};

endpoint.v3.whitelabel = {};

endpoint.v3.whitelabel.dns = {};

endpoint.v3.whitelabel.dns.email = {};

endpoint.validations = {};

endpoint.validations.email = {};

endpoint.stats = {};

endpoint.asm.suppressions.get = function(httpOptions) {
	var url = parse('/asm/suppressions');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.asm.suppressions.global.post = function(httpOptions) {
	var url = parse('/asm/suppressions/global');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.asm.groups.get = function(httpOptions) {
	var url = parse('/asm/groups');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.webhooks.parse.settings.get = function(httpOptions) {
	var url = parse('/user/webhooks/parse/settings');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.webhooks.parse.stats.get = function(httpOptions) {
	var url = parse('/user/webhooks/parse/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.webhooks.event.test.post = function(httpOptions) {
	var url = parse('/user/webhooks/event/test');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.user.webhooks.event.settings.get = function(httpOptions) {
	var url = parse('/user/webhooks/event/settings');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.settings.enforcedTls.patch = function(httpOptions) {
	var url = parse('/user/settings/enforced_tls');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.user.scheduledSends.post = function(httpOptions) {
	var url = parse('/user/scheduled_sends');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.user.profile.get = function(httpOptions) {
	var url = parse('/user/profile');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.email.get = function(httpOptions) {
	var url = parse('/user/email');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.password.put = function(httpOptions) {
	var url = parse('/user/password');
    sys.logs.debug('[sendgrid] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.user.username.get = function(httpOptions) {
	var url = parse('/user/username');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.credits.get = function(httpOptions) {
	var url = parse('/user/credits');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.user.account.get = function(httpOptions) {
	var url = parse('/user/account');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.domains.get = function(httpOptions) {
	var url = parse('/whitelabel/domains');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.domains.subuser.get = function(httpOptions) {
	var url = parse('/whitelabel/domains/subuser');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.domains.default.get = function(httpOptions) {
	var url = parse('/whitelabel/domains/default');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.links.get = function(httpOptions) {
	var url = parse('/whitelabel/links');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.links.default.get = function(httpOptions) {
	var url = parse('/whitelabel/links/default');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.whitelabel.links.subuser.delete = function(httpOptions) {
	var url = parse('/whitelabel/links/subuser');
    sys.logs.debug('[sendgrid] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.whitelabel.ips.post = function(httpOptions) {
	var url = parse('/whitelabel/ips');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactdb.recipients.patch = function(httpOptions) {
	var url = parse('/contactdb/recipients');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.contactdb.recipients.count.get = function(httpOptions) {
	var url = parse('/contactdb/recipients/count');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.contactdb.recipients.search.post = function(httpOptions) {
	var url = parse('/contactdb/recipients/search');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactdb.recipients.billableCount.get = function(httpOptions) {
	var url = parse('/contactdb/recipients/billable_count');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.contactdb.lists.get = function(httpOptions) {
	var url = parse('/contactdb/lists');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.contactdb.customFields.post = function(httpOptions) {
	var url = parse('/contactdb/custom_fields');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.contactdb.segments.get = function(httpOptions) {
	var url = parse('/contactdb/segments');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.contactdb.reservedFields.get = function(httpOptions) {
	var url = parse('/contactdb/reserved_fields');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.contactdb.status.get = function(httpOptions) {
	var url = parse('/contactdb/status');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ips.post = function(httpOptions) {
	var url = parse('/ips');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ips.pools.get = function(httpOptions) {
	var url = parse('/ips/pools');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ips.warmup.post = function(httpOptions) {
	var url = parse('/ips/warmup');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.ips.remaining.get = function(httpOptions) {
	var url = parse('/ips/remaining');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.ips.assigned.get = function(httpOptions) {
	var url = parse('/ips/assigned');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.suppression.blocks.get = function(httpOptions) {
	var url = parse('/suppression/blocks');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.suppression.bounces.delete = function(httpOptions) {
	var url = parse('/suppression/bounces');
    sys.logs.debug('[sendgrid] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.suppression.invalidEmails.delete = function(httpOptions) {
	var url = parse('/suppression/invalid_emails');
    sys.logs.debug('[sendgrid] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.suppression.spamReports.get = function(httpOptions) {
	var url = parse('/suppression/spam_reports');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.suppression.unsubscribes.get = function(httpOptions) {
	var url = parse('/suppression/unsubscribes');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.scopes.get = function(httpOptions) {
	var url = parse('/scopes');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.scopes.requests.get = function(httpOptions) {
	var url = parse('/scopes/requests');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketing.contacts.get = function(httpOptions) {
	var url = parse('/marketing/contacts');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketing.contacts.exports.post = function(httpOptions) {
	var url = parse('/marketing/contacts/exports');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.marketing.contacts.imports.put = function(httpOptions) {
	var url = parse('/marketing/contacts/imports');
    sys.logs.debug('[sendgrid] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.marketing.contacts.count.get = function(httpOptions) {
	var url = parse('/marketing/contacts/count');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketing.contacts.search.post = function(httpOptions) {
	var url = parse('/marketing/contacts/search');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.marketing.segments.post = function(httpOptions) {
	var url = parse('/marketing/segments');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.marketing.singlesends.post = function(httpOptions) {
	var url = parse('/marketing/singlesends');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.marketing.lists.get = function(httpOptions) {
	var url = parse('/marketing/lists');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketing.senders.get = function(httpOptions) {
	var url = parse('/marketing/senders');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.marketing.fieldDefinitions.get = function(httpOptions) {
	var url = parse('/marketing/field_definitions');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.get = function(httpOptions) {
	var url = parse('/mail_settings');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.plainContent.get = function(httpOptions) {
	var url = parse('/mail_settings/plain_content');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.template.get = function(httpOptions) {
	var url = parse('/mail_settings/template');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.forwardSpam.get = function(httpOptions) {
	var url = parse('/mail_settings/forward_spam');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.forwardBounce.patch = function(httpOptions) {
	var url = parse('/mail_settings/forward_bounce');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.mailSettings.footer.patch = function(httpOptions) {
	var url = parse('/mail_settings/footer');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.mailSettings.addressWhitelist.get = function(httpOptions) {
	var url = parse('/mail_settings/address_whitelist');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailSettings.spamCheck.patch = function(httpOptions) {
	var url = parse('/mail_settings/spam_check');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.mailSettings.bouncePurge.patch = function(httpOptions) {
	var url = parse('/mail_settings/bounce_purge');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.mailSettings.bcc.get = function(httpOptions) {
	var url = parse('/mail_settings/bcc');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teammates.get = function(httpOptions) {
	var url = parse('/teammates');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.teammates.pending.get = function(httpOptions) {
	var url = parse('/teammates/pending');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.trackingSettings.get = function(httpOptions) {
	var url = parse('/tracking_settings');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.trackingSettings.click.get = function(httpOptions) {
	var url = parse('/tracking_settings/click');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.trackingSettings.subscription.get = function(httpOptions) {
	var url = parse('/tracking_settings/subscription');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.trackingSettings.googleAnalytics.patch = function(httpOptions) {
	var url = parse('/tracking_settings/google_analytics');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.trackingSettings.open.patch = function(httpOptions) {
	var url = parse('/tracking_settings/open');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.categories.stats.get = function(httpOptions) {
	var url = parse('/categories/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.categories.stats.sums.get = function(httpOptions) {
	var url = parse('/categories/stats/sums');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.categories.get = function(httpOptions) {
	var url = parse('/categories');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.accessSettings.activity.get = function(httpOptions) {
	var url = parse('/access_settings/activity');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.accessSettings.whitelist.delete = function(httpOptions) {
	var url = parse('/access_settings/whitelist');
    sys.logs.debug('[sendgrid] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.subusers.stats.get = function(httpOptions) {
	var url = parse('/subusers/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.subusers.stats.monthly.get = function(httpOptions) {
	var url = parse('/subusers/stats/monthly');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.subusers.stats.sums.get = function(httpOptions) {
	var url = parse('/subusers/stats/sums');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.subusers.post = function(httpOptions) {
	var url = parse('/subusers');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.subusers.reputations.get = function(httpOptions) {
	var url = parse('/subusers/reputations');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.messages.get = function(httpOptions) {
	var url = parse('/messages');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.messages.download.post = function(httpOptions) {
	var url = parse('/messages/download');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.mail.batch.post = function(httpOptions) {
	var url = parse('/mail/batch');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.mail.send.post = function(httpOptions) {
	var url = parse('/mail/send');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.partnerSettings.get = function(httpOptions) {
	var url = parse('/partner_settings');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.partnerSettings.newRelic.patch = function(httpOptions) {
	var url = parse('/partner_settings/new_relic');
    sys.logs.debug('[sendgrid] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.browsers.stats.get = function(httpOptions) {
	var url = parse('/browsers/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.devices.stats.get = function(httpOptions) {
	var url = parse('/devices/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.templates.get = function(httpOptions) {
	var url = parse('/templates');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.campaigns.post = function(httpOptions) {
	var url = parse('/campaigns');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.alerts.post = function(httpOptions) {
	var url = parse('/alerts');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.apiKeys.post = function(httpOptions) {
	var url = parse('/api_keys');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.clients.stats.get = function(httpOptions) {
	var url = parse('/clients/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.geo.stats.get = function(httpOptions) {
	var url = parse('/geo/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.mailboxProviders.stats.get = function(httpOptions) {
	var url = parse('/mailbox_providers/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.senders.post = function(httpOptions) {
	var url = parse('/senders');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.v3.whitelabel.dns.email.post = function(httpOptions) {
	var url = parse('/v3/whitelabel/dns/email');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.validations.email.post = function(httpOptions) {
	var url = parse('/validations/email');
    sys.logs.debug('[sendgrid] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.stats.get = function(httpOptions) {
	var url = parse('/stats');
    sys.logs.debug('[sendgrid] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
  try {
    if (arguments.length > 1) {
      var args = arguments[1], i = 0;
      return str.replace(/(:(?:\w|-)+)/g, () => {
        if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
        return args[i++];
      });
    } else {
      if (str) {
        return str;
      }
      throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
    }
  } catch (err) {
    sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
    throw err;
  }
}