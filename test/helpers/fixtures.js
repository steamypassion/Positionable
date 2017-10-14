

function appendFixture(classNames, parent) {
  parent = parent || document.getElementById('element-fixtures');
  var el = document.createElement('div');
  classNames.filter(n => n).forEach(n => el.classList.add(n));
  parent.appendChild(el);
  return el;
}

function appendAbsoluteBox(className, parent) {
  return appendFixture(['box', 'absolute-box', className], parent);
}

function appendFixedBox(className, parent) {
  return appendFixture(['box', 'fixed-box', className], parent);
}

function appendRelativeBox(className, parent) {
  return appendFixture(['box', 'relative-box', className], parent);
}

function appendStaticBox(className, parent) {
  return appendFixture(['box', 'static-box', className], parent);
}

function appendInvertedBox(className, parent) {
  return appendFixture(['box', 'inverted-box', className], parent);
}

function appendRotatedBox(className, parent) {
  return appendFixture(['box', 'rotated-box', className], parent);
}

function appendTranslatedBox(className, parent) {
  return appendFixture(['box', 'translated-box', className], parent);
}

function appendTransformedBox(className, parent) {
  return appendFixture(['box', 'transformed-box', className], parent);
}

function appendSubpixelTransformedBox(className, parent) {
  return appendFixture(['box', 'subpixel-transformed-box', className], parent);
}

function appendBackgroundImageBox(className, parent) {
  return appendFixture(['box', 'background-image-box', className], parent);
}

function appendNestedBox() {
  var container = appendRelativeBox();
  return appendFixture(['box', 'absolute-box'], container);
}

function releaseAppendedFixtures() {
  document.getElementById('element-fixtures').innerHTML = '';
}

/*-------------------------] Generic Elements [--------------------------*/

function createDiv() {
  return document.createElement('div');
}

function createLink(href) {
  var el = document.createElement('a');
  el.href = href;
  return el;
}

function appendChild(el, tag) {
  var child = document.createElement(tag);
  el.appendChild(child);
  return child;
}

