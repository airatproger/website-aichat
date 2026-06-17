/* @ds-bundle: {"format":3,"namespace":"AiratiikAIChatDesignSystem_b8300c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ChatBubble","sourcePath":"components/core/ChatBubble.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Composer","sourcePath":"components/core/Composer.jsx"},{"name":"Hint","sourcePath":"components/core/Hint.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MenuRow","sourcePath":"components/core/MenuRow.jsx"},{"name":"ModelRow","sourcePath":"components/core/ModelRow.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"RateStars","sourcePath":"components/core/RateStars.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"ICONS","sourcePath":"components/core/icons-data.js"},{"name":"ICON_NAMES","sourcePath":"components/core/icons-data.js"}],"sourceHashes":{"components/core/Badge.jsx":"e0f5b383b83f","components/core/Button.jsx":"d0fc1c3f9723","components/core/Card.jsx":"7bc4c261a9b9","components/core/ChatBubble.jsx":"cc71f20df72b","components/core/Chip.jsx":"ae2188782bc7","components/core/Composer.jsx":"24196665c5db","components/core/Hint.jsx":"7898080193ed","components/core/Icon.jsx":"4865a3393768","components/core/IconButton.jsx":"ae29a936a17d","components/core/MenuRow.jsx":"44e46410c06c","components/core/ModelRow.jsx":"7df36300eb8e","components/core/Pill.jsx":"782ba50e3dbe","components/core/RateStars.jsx":"424a4ab23caf","components/core/Toast.jsx":"43d0327ca25f","components/core/Toggle.jsx":"5a50cef6906a","components/core/icons-data.js":"00be0e673f38","ui_kits/extension/screens.jsx":"fc72b716ec67"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AiratiikAIChatDesignSystem_b8300c = window.AiratiikAIChatDesignSystem_b8300c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small count / status label. Neutral by default; accent or solid
 * variants for emphasis.
 */
function Badge({
  children,
  variant = "neutral",
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: "var(--surface-raised)",
      color: "var(--text-secondary)",
      boxShadow: "var(--ring-subtle)"
    },
    accent: {
      background: "rgba(37,115,233,0.12)",
      color: "var(--accent)",
      boxShadow: "none"
    },
    solid: {
      background: "var(--accent)",
      color: "var(--white)",
      boxShadow: "none"
    },
    danger: {
      background: "rgba(233,37,40,0.12)",
      color: "var(--danger)",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 7px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: "16px",
      fontWeight: "var(--fw-semibold)",
      ...variants,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — frosted or solid surface container with the signature inset ring
 * and soft ambient shadow.
 */
function Card({
  children,
  frosted = false,
  radius = "var(--radius-frame)",
  padding = 16,
  elevated = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: frosted ? "var(--surface-glass)" : "var(--surface-base)",
      backdropFilter: frosted ? "blur(var(--blur-md))" : "none",
      WebkitBackdropFilter: frosted ? "blur(var(--blur-md))" : "none",
      borderRadius: radius,
      padding,
      boxShadow: elevated ? "var(--ring), var(--shadow-card)" : "var(--ring)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ChatBubble — a single message. User messages are right-aligned paper
 * bubbles; assistant messages are plain, full-width ink text.
 */
function ChatBubble({
  role = "assistant",
  children,
  style,
  ...rest
}) {
  if (role === "user") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        justifyContent: "flex-end",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "85%",
        padding: "10px 16px",
        borderRadius: "var(--radius-lg)",
        borderBottomRightRadius: "var(--radius-xs)",
        background: "var(--surface-raised)",
        boxShadow: "var(--ring-subtle)",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-primary)",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Hint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hint — speech-bubble tooltip with a little tail. Matches the onboarding
 * hints ("Attach photo or file", shortcut help). Centered text on paper glass.
 */
function Hint({
  children,
  placement = "bottom",
  maxWidth = 280,
  style,
  ...rest
}) {
  const tailUp = placement === "bottom"; // bubble below anchor → tail points up
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "inline-block",
      maxWidth,
      padding: "10px 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-md))",
      WebkitBackdropFilter: "blur(var(--blur-md))",
      boxShadow: "var(--ring), var(--shadow-card)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "22px",
      textAlign: "center",
      color: "var(--text-primary)",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: 24,
      [tailUp ? "top" : "bottom"]: -6,
      width: 12,
      height: 12,
      background: "var(--paper)",
      transform: "rotate(45deg)",
      boxShadow: tailUp ? "-1px -1px 0 0 var(--border-default)" : "1px 1px 0 0 var(--border-default)"
    }
  }));
}
Object.assign(__ds_scope, { Hint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Hint.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — frosted glass capsule. The base chrome shape: header model selector,
 * action clusters, status pills. Frosted by default (use over content).
 */
function Pill({
  children,
  frosted = true,
  interactive = false,
  padding = "6px 8px 6px 12px",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding,
      borderRadius: "var(--radius-pill)",
      background: frosted ? "var(--surface-glass)" : "var(--surface-raised)",
      backdropFilter: frosted ? "blur(var(--blur-md))" : "none",
      WebkitBackdropFilter: frosted ? "blur(var(--blur-md))" : "none",
      boxShadow: "var(--ring)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: "20px",
      cursor: interactive ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      if (interactive) e.currentTarget.style.background = "var(--paper)";
    },
    onMouseLeave: e => {
      if (interactive) e.currentTarget.style.background = frosted ? "var(--surface-glass)" : "var(--surface-raised)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle — iOS-style switch. On = accent blue, knob slides right.
 */
function Toggle({
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 52,
      height: 32,
      flex: "0 0 auto",
      padding: 3,
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--accent)" : "var(--line-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/core/icons-data.js
try { (() => {
// AUTO-GENERATED from assets/icons/*.svg — iconixto linear set. Monochrome, currentColor.
const ICONS = {
  "add": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path transform=\"translate(4.25 4.25)\" d=\"M 8.5 0.75 C 8.5 0.336 8.164 0 7.75 0 C 7.336 0 7 0.336 7 0.75 L 7 7 L 0.75 7 C 0.336 7 0 7.336 0 7.75 C 0 8.164 0.336 8.5 0.75 8.5 L 7 8.5 L 7 14.75 C 7 15.164 7.336 15.5 7.75 15.5 C 8.164 15.5 8.5 15.164 8.5 14.75 L 8.5 8.5 L 14.75 8.5 C 15.164 8.5 15.5 8.164 15.5 7.75 C 15.5 7.336 15.164 7 14.75 7 L 8.5 7 L 8.5 0.75 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>",
  "ai-text": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.250\" height=\"19\" viewBox=\"0 0 21.250 19\" fill=\"none\">\n  <path d=\"M 20.576 17.504 C 20.954 17.542 21.25 17.862 21.25 18.25 C 21.25 18.638 20.954 18.958 20.576 18.996 L 20.5 19 L 1 19 C 0.586 19 0.25 18.664 0.25 18.25 C 0.25 17.836 0.586 17.5 1 17.5 L 20.5 17.5 L 20.576 17.504 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 20.576 10.504 C 20.954 10.542 21.25 10.862 21.25 11.25 C 21.25 11.638 20.954 11.958 20.576 11.996 L 20.5 12 L 1 12 C 0.586 12 0.25 11.664 0.25 11.25 C 0.25 10.836 0.586 10.5 1 10.5 L 20.5 10.5 L 20.576 10.504 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 2.25 4 C 2.531 4 2.789 4.157 2.917 4.407 L 3.315 5.184 L 4.093 5.583 C 4.343 5.711 4.5 5.969 4.5 6.25 C 4.5 6.531 4.343 6.789 4.093 6.917 L 3.315 7.315 L 2.917 8.093 C 2.789 8.343 2.531 8.5 2.25 8.5 C 1.969 8.5 1.711 8.343 1.583 8.093 L 1.184 7.315 L 0.407 6.917 C 0.157 6.789 0 6.531 0 6.25 C 0 5.969 0.157 5.711 0.407 5.583 L 1.184 5.184 L 1.583 4.407 L 1.637 4.318 C 1.776 4.121 2.004 4 2.25 4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 6.75 0 C 7.031 0 7.289 0.157 7.417 0.407 L 7.985 1.514 L 9.093 2.083 C 9.343 2.211 9.5 2.469 9.5 2.75 C 9.5 3.031 9.343 3.289 9.093 3.417 L 7.985 3.985 L 7.417 5.093 C 7.289 5.343 7.031 5.5 6.75 5.5 C 6.469 5.5 6.211 5.343 6.083 5.093 L 5.514 3.985 L 4.407 3.417 C 4.157 3.289 4 3.031 4 2.75 C 4 2.469 4.157 2.211 4.407 2.083 L 5.514 1.514 L 6.083 0.407 L 6.137 0.318 C 6.276 0.121 6.504 0 6.75 0 Z M 6.738 2.414 C 6.667 2.553 6.553 2.667 6.414 2.738 L 6.391 2.75 L 6.414 2.762 L 6.514 2.823 C 6.608 2.892 6.685 2.982 6.738 3.086 L 6.75 3.108 L 6.762 3.086 C 6.833 2.947 6.947 2.833 7.086 2.762 L 7.108 2.75 L 7.086 2.738 C 6.947 2.667 6.833 2.553 6.762 2.414 L 6.75 2.391 L 6.738 2.414 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 20.5 3.5 C 20.914 3.5 21.25 3.836 21.25 4.25 C 21.25 4.664 20.914 5 20.5 5 L 11.5 5 C 11.086 5 10.75 4.664 10.75 4.25 C 10.75 3.836 11.086 3.5 11.5 3.5 L 20.5 3.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "ai": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"20\" viewBox=\"0 0 19 20\" fill=\"none\">\n  <path d=\"M 4 2.359 L 3.963 2.46 C 3.705 3.156 3.156 3.705 2.46 3.963 L 2.359 4 L 2.46 4.037 C 3.156 4.295 3.705 4.844 3.963 5.54 L 4 5.641 L 4.037 5.54 C 4.295 4.844 4.844 4.295 5.54 4.037 L 5.641 4 L 5.54 3.963 C 4.844 3.705 4.295 3.156 4.037 2.46 L 4 2.359 Z M 11.928 6.798 C 11.781 6.401 11.219 6.401 11.072 6.798 L 10.199 9.157 C 9.849 10.103 9.103 10.849 8.157 11.199 L 5.798 12.072 C 5.401 12.219 5.401 12.781 5.798 12.928 L 8.157 13.801 C 9.103 14.151 9.849 14.897 10.199 15.843 L 11.072 18.202 C 11.219 18.599 11.781 18.599 11.928 18.202 L 12.801 15.843 C 13.151 14.897 13.897 14.151 14.843 13.801 L 17.202 12.928 C 17.599 12.781 17.599 12.219 17.202 12.072 L 14.843 11.199 C 13.897 10.849 13.151 10.103 12.801 9.157 L 11.928 6.798 Z M 4.979 0.681 C 4.643 -0.227 3.357 -0.227 3.021 0.681 L 2.556 1.939 C 2.45 2.225 2.225 2.45 1.939 2.556 L 0.681 3.021 C -0.227 3.357 -0.227 4.643 0.681 4.979 L 1.939 5.444 C 2.225 5.55 2.45 5.775 2.556 6.061 L 3.021 7.319 C 3.357 8.227 4.643 8.227 4.979 7.319 L 5.444 6.061 C 5.55 5.775 5.775 5.55 6.061 5.444 L 7.319 4.979 C 8.227 4.643 8.227 3.357 7.319 3.021 L 6.061 2.556 C 5.775 2.45 5.55 2.225 5.444 1.939 L 4.979 0.681 Z M 13.335 6.278 C 12.705 4.574 10.295 4.574 9.665 6.278 L 8.792 8.636 C 8.594 9.172 8.172 9.594 7.636 9.792 L 5.278 10.665 C 3.574 11.295 3.574 13.705 5.278 14.335 L 7.636 15.208 C 8.172 15.406 8.594 15.828 8.792 16.364 L 9.665 18.722 C 10.295 20.426 12.705 20.426 13.335 18.722 L 14.208 16.364 C 14.406 15.828 14.828 15.406 15.364 15.208 L 17.722 14.335 C 19.426 13.705 19.426 11.295 17.722 10.665 L 15.364 9.792 C 14.828 9.594 14.406 9.172 14.208 8.636 L 13.335 6.278 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "arrow-small-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path transform=\"translate(7.25 10.5)\" d=\"M 1.28 0.22 C 0.987 -0.073 0.513 -0.073 0.22 0.22 C -0.073 0.513 -0.073 0.987 0.22 1.28 L 4.22 5.28 C 4.36 5.421 4.551 5.5 4.75 5.5 C 4.949 5.5 5.14 5.421 5.28 5.28 L 9.28 1.28 C 9.573 0.987 9.573 0.513 9.28 0.22 C 8.987 -0.073 8.513 -0.073 8.22 0.22 L 4.75 3.689 L 1.28 0.22 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>",
  "attachment": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.567\" height=\"16.872\" viewBox=\"0 0 17.567 16.872\" fill=\"none\">\n  <path d=\"M 11.176 1.303 C 11.482 1.023 11.502 0.549 11.222 0.243 C 10.942 -0.062 10.468 -0.083 10.163 0.197 L 1.657 7.994 C -0.547 10.015 -0.553 13.488 1.644 15.517 C 3.63 17.35 6.7 17.32 8.65 15.448 L 16.637 7.781 C 17.795 6.669 17.883 4.847 16.839 3.628 C 15.691 2.29 13.647 2.211 12.401 3.458 L 6.639 9.22 C 6.346 9.513 6.346 9.987 6.639 10.28 C 6.932 10.573 7.407 10.573 7.7 10.28 L 13.462 4.519 C 14.09 3.89 15.121 3.929 15.7 4.605 C 16.227 5.219 16.182 6.138 15.598 6.699 L 7.611 14.366 C 6.234 15.688 4.065 15.71 2.662 14.414 C 1.109 12.981 1.113 10.527 2.671 9.099 L 11.176 1.303 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "close-circle": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <path d=\"M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z M 7.702 6.641 C 7.409 6.348 6.934 6.348 6.641 6.641 C 6.348 6.934 6.348 7.409 6.641 7.702 L 8.939 10 L 6.641 12.298 C 6.348 12.591 6.348 13.066 6.641 13.359 C 6.934 13.652 7.409 13.652 7.702 13.359 L 10 11.061 L 12.298 13.359 C 12.591 13.652 13.066 13.652 13.359 13.359 C 13.652 13.066 13.652 12.591 13.359 12.298 L 11.061 10 L 13.359 7.702 C 13.652 7.409 13.652 6.934 13.359 6.641 C 13.066 6.348 12.591 6.348 12.298 6.641 L 10 8.939 L 7.702 6.641 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "close": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"13.500\" height=\"13.500\" viewBox=\"0 0 13.500 13.500\" fill=\"none\">\n  <path d=\"M 1.28 0.22 C 0.987 -0.073 0.513 -0.073 0.22 0.22 C -0.073 0.513 -0.073 0.987 0.22 1.28 L 5.689 6.75 L 0.22 12.22 C -0.073 12.513 -0.073 12.987 0.22 13.28 C 0.513 13.573 0.987 13.573 1.28 13.28 L 6.75 7.811 L 12.22 13.28 C 12.513 13.573 12.987 13.573 13.28 13.28 C 13.573 12.987 13.573 12.513 13.28 12.22 L 7.811 6.75 L 13.28 1.28 C 13.573 0.987 13.573 0.513 13.28 0.22 C 12.987 -0.073 12.513 -0.073 12.22 0.22 L 6.75 5.689 L 1.28 0.22 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "copy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.500\" height=\"19.500\" viewBox=\"0 0 19.500 19.500\" fill=\"none\">\n  <path d=\"M 11.502 15.503 L 4 15.503 L 3.794 15.497 C 1.681 15.39 0 13.642 0 11.502 L 0 4 C 0 1.791 1.791 0 4 0 L 11.503 0 L 11.708 0.005 C 13.822 0.112 15.503 1.86 15.503 4 L 15.503 11.503 L 15.497 11.708 C 15.394 13.754 13.754 15.394 11.708 15.497 L 11.502 15.503 Z M 11.502 14.003 L 4 14.003 C 2.619 14.003 1.5 12.883 1.5 11.502 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 L 11.503 1.5 C 12.883 1.5 14.003 2.619 14.003 4 L 14.003 11.503 C 14.003 12.883 12.883 14.003 11.502 14.003 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 15.499 19.5 L 7.997 19.5 L 7.791 19.494 C 6.203 19.414 4.858 18.406 4.289 17.001 L 5.999 17.001 C 6.455 17.608 7.18 18 7.997 18 L 15.499 18 C 16.88 18 18 16.881 18 15.5 L 18 7.997 C 18 7.181 17.609 6.456 17.003 5.999 L 17.003 4.289 C 18.467 4.883 19.5 6.32 19.5 7.997 L 19.5 15.5 L 19.495 15.705 C 19.391 17.751 17.751 19.391 15.706 19.494 L 15.499 19.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "desktop": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"17.750\" viewBox=\"0 0 20 17.750\" fill=\"none\">\n  <path d=\"M 16 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 12 C 0 14.209 1.791 16 4 16 L 16 16 C 18.209 16 20 14.209 20 12 L 20 4 C 20 1.791 18.209 0 16 0 Z M 4 1.5 L 16 1.5 C 17.381 1.5 18.5 2.619 18.5 4 L 18.5 12 C 18.5 13.381 17.381 14.5 16 14.5 L 4 14.5 C 2.619 14.5 1.5 13.381 1.5 12 L 1.5 4 C 1.5 2.619 2.619 1.5 4 1.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 8 16.25 C 7.586 16.25 7.25 16.586 7.25 17 C 7.25 17.414 7.586 17.75 8 17.75 L 12 17.75 C 12.414 17.75 12.75 17.414 12.75 17 C 12.75 16.586 12.414 16.25 12 16.25 L 8 16.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "document": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.500\" height=\"19.500\" viewBox=\"0 0 15.500 19.500\" fill=\"none\">\n  <path d=\"M 3.75 10 C 3.336 10 3 10.336 3 10.75 C 3 11.164 3.336 11.5 3.75 11.5 L 11.75 11.5 C 12.164 11.5 12.5 11.164 12.5 10.75 C 12.5 10.336 12.164 10 11.75 10 L 3.75 10 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 3 6.75 C 3 6.336 3.336 6 3.75 6 L 7.75 6 C 8.164 6 8.5 6.336 8.5 6.75 C 8.5 7.164 8.164 7.5 7.75 7.5 L 3.75 7.5 C 3.336 7.5 3 7.164 3 6.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 3.75 14 C 3.336 14 3 14.336 3 14.75 C 3 15.164 3.336 15.5 3.75 15.5 L 11.75 15.5 C 12.164 15.5 12.5 15.164 12.5 14.75 C 12.5 14.336 12.164 14 11.75 14 L 3.75 14 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 4.75 0 C 2.127 0 0 2.127 0 4.75 L 0 14.75 C 0 17.373 2.127 19.5 4.75 19.5 L 10.75 19.5 C 13.373 19.5 15.5 17.373 15.5 14.75 L 15.5 6.407 C 15.5 5.147 15 3.939 14.109 3.048 L 12.452 1.391 C 11.561 0.5 10.353 0 9.093 0 L 4.75 0 Z M 1.5 4.75 C 1.5 2.955 2.955 1.5 4.75 1.5 L 9.093 1.5 C 9.955 1.5 10.782 1.842 11.391 2.452 L 13.048 4.109 C 13.658 4.718 14 5.545 14 6.407 L 14 14.75 C 14 16.545 12.545 18 10.75 18 L 4.75 18 C 2.955 18 1.5 16.545 1.5 14.75 L 1.5 4.75 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "dots-v": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"2.500\" height=\"17.509\" viewBox=\"0 0 2.500 17.509\" fill=\"none\">\n  <path d=\"M 1.25 2.509 C 0.56 2.509 0 1.949 0 1.259 L 0 1.25 C 0 0.56 0.56 0 1.25 0 C 1.94 0 2.5 0.56 2.5 1.25 L 2.5 1.259 C 2.5 1.949 1.94 2.509 1.25 2.509 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 1.25 10.009 C 0.56 10.009 0 9.449 0 8.759 L 0 8.75 C 0 8.06 0.56 7.5 1.25 7.5 C 1.94 7.5 2.5 8.06 2.5 8.75 L 2.5 8.759 C 2.5 9.449 1.94 10.009 1.25 10.009 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 0 16.259 C 0 16.949 0.56 17.509 1.25 17.509 C 1.94 17.509 2.5 16.949 2.5 16.259 L 2.5 16.25 C 2.5 15.56 1.94 15 1.25 15 C 0.56 15 0 15.56 0 16.25 L 0 16.259 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "download": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.500\" height=\"17.500\" viewBox=\"0 0 19.500 17.500\" fill=\"none\">\n  <path d=\"M 0.75 9 C 1.164 9 1.5 9.336 1.5 9.75 L 1.5 14.75 C 1.5 15.44 2.06 16 2.75 16 L 16.75 16 C 17.44 16 18 15.44 18 14.75 L 18 9.75 C 18 9.336 18.336 9 18.75 9 C 19.164 9 19.5 9.336 19.5 9.75 L 19.5 14.75 C 19.5 16.269 18.269 17.5 16.75 17.5 L 2.75 17.5 C 1.231 17.5 0 16.269 0 14.75 L 0 9.75 C 0 9.336 0.336 9 0.75 9 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 9.75 0 C 10.164 0 10.5 0.336 10.5 0.75 L 10.5 8.818 L 13.196 5.869 C 13.476 5.563 13.95 5.542 14.256 5.821 C 14.562 6.101 14.583 6.575 14.304 6.881 L 10.304 11.256 C 10.161 11.411 9.961 11.5 9.75 11.5 C 9.539 11.5 9.339 11.411 9.196 11.256 L 5.196 6.881 C 4.917 6.575 4.938 6.101 5.244 5.821 C 5.55 5.542 6.024 5.563 6.304 5.869 L 9 8.818 L 9 0.75 C 9 0.336 9.336 0 9.75 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "edit-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.750\" height=\"16.536\" viewBox=\"0 0 16.750 16.536\" fill=\"none\">\n  <path d=\"M 0.293 11.243 L 10.5 1.036 C 11.881 -0.345 14.119 -0.345 15.5 1.036 C 16.881 2.416 16.881 4.655 15.5 6.036 L 5.293 16.243 C 5.105 16.43 4.851 16.536 4.586 16.536 L 1 16.536 C 0.448 16.536 0 16.088 0 15.536 L 0 11.95 C 0 11.685 0.105 11.43 0.293 11.243 Z M 1.5 15.036 L 1.5 12.157 L 11.561 2.096 C 12.356 1.301 13.644 1.301 14.439 2.096 C 15.234 2.891 15.234 4.18 14.439 4.975 L 4.379 15.036 L 1.5 15.036 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 9 14.786 C 8.586 14.786 8.25 15.121 8.25 15.536 C 8.25 15.95 8.586 16.286 9 16.286 L 16 16.286 C 16.414 16.286 16.75 15.95 16.75 15.536 C 16.75 15.121 16.414 14.786 16 14.786 L 9 14.786 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "export": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.500\" height=\"19.500\" viewBox=\"0 0 19.500 19.500\" fill=\"none\">\n  <path d=\"M 10.28 0.22 C 9.987 -0.073 9.513 -0.073 9.22 0.22 L 7.22 2.22 C 6.927 2.513 6.927 2.987 7.22 3.28 C 7.513 3.573 7.987 3.573 8.28 3.28 L 9 2.561 L 9 10.75 C 9 11.164 9.336 11.5 9.75 11.5 C 10.164 11.5 10.5 11.164 10.5 10.75 L 10.5 2.561 L 11.22 3.28 C 11.513 3.573 11.987 3.573 12.28 3.28 C 12.573 2.987 12.573 2.513 12.28 2.22 L 10.28 0.22 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 1.5 12.75 C 1.5 11.507 2.507 10.5 3.75 10.5 C 4.164 10.5 4.5 10.164 4.5 9.75 C 4.5 9.336 4.164 9 3.75 9 C 1.679 9 0 10.679 0 12.75 L 0 14.75 C 0 17.373 2.127 19.5 4.75 19.5 L 14.75 19.5 C 17.373 19.5 19.5 17.373 19.5 14.75 L 19.5 12.75 C 19.5 10.679 17.821 9 15.75 9 C 15.336 9 15 9.336 15 9.75 C 15 10.164 15.336 10.5 15.75 10.5 C 16.993 10.5 18 11.507 18 12.75 L 18 14.75 C 18 16.545 16.545 18 14.75 18 L 4.75 18 C 2.955 18 1.5 16.545 1.5 14.75 L 1.5 12.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "flash-filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.885\" height=\"18.268\" viewBox=\"0 0 12.885 18.268\" fill=\"none\">\n  <path d=\"M 7.193 1.252 C 7.193 -0.067 5.414 -0.487 4.825 0.693 L 0.134 10.075 C -0.282 10.906 0.322 11.884 1.252 11.884 L 5.693 11.884 L 5.693 17.016 C 5.693 18.335 7.471 18.755 8.061 17.575 L 12.752 8.193 C 13.167 7.362 12.563 6.384 11.634 6.384 L 7.193 6.384 L 7.193 1.252 Z M 1.656 10.384 L 5.693 2.311 L 5.693 6.634 C 5.693 7.324 6.252 7.884 6.943 7.884 L 11.229 7.884 L 7.193 15.957 L 7.193 11.634 C 7.193 10.943 6.633 10.384 5.943 10.384 L 1.656 10.384 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 5.693 2.311 L 1.656 10.384 L 5.943 10.384 C 6.633 10.384 7.193 10.943 7.193 11.634 L 7.193 15.957 L 11.229 7.884 L 6.943 7.884 C 6.252 7.884 5.693 7.324 5.693 6.634 L 5.693 2.311 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "flash": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12.885\" height=\"18.268\" viewBox=\"0 0 12.885 18.268\" fill=\"none\">\n  <path d=\"M 7.193 1.252 C 7.193 -0.067 5.414 -0.487 4.825 0.693 L 0.134 10.075 C -0.282 10.906 0.322 11.884 1.252 11.884 L 5.693 11.884 L 5.693 17.016 C 5.693 18.335 7.471 18.755 8.061 17.575 L 12.752 8.193 C 13.167 7.362 12.563 6.384 11.634 6.384 L 7.193 6.384 L 7.193 1.252 Z M 1.656 10.384 L 5.693 2.311 L 5.693 6.634 C 5.693 7.324 6.252 7.884 6.943 7.884 L 11.229 7.884 L 7.193 15.957 L 7.193 11.634 C 7.193 10.943 6.633 10.384 5.943 10.384 L 1.656 10.384 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "help": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\">\n  <path d=\"M 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 Z M 8.969 11.902 C 8.969 11.97 9.024 12.026 9.093 12.026 L 10.395 12.026 C 10.464 12.026 10.519 11.97 10.519 11.902 C 10.522 11.565 10.561 11.282 10.635 11.053 C 10.713 10.821 10.831 10.62 10.989 10.448 C 11.151 10.276 11.357 10.111 11.608 9.952 C 11.894 9.778 12.14 9.579 12.348 9.357 C 12.556 9.134 12.716 8.88 12.828 8.594 C 12.943 8.308 13 7.984 13 7.622 C 13 7.085 12.873 6.621 12.618 6.23 C 12.367 5.836 12.015 5.532 11.562 5.319 C 11.112 5.106 10.59 5 9.998 5 C 9.455 5 8.958 5.102 8.508 5.305 C 8.061 5.508 7.701 5.813 7.428 6.22 C 7.296 6.419 7.195 6.641 7.124 6.887 C 6.992 7.34 7.389 7.736 7.861 7.736 L 7.879 7.736 C 8.315 7.736 8.632 7.362 8.871 6.997 C 9.002 6.8 9.164 6.654 9.36 6.559 C 9.559 6.46 9.768 6.411 9.988 6.411 C 10.227 6.411 10.443 6.462 10.635 6.563 C 10.831 6.665 10.986 6.808 11.101 6.992 C 11.216 7.177 11.273 7.394 11.273 7.645 C 11.273 7.868 11.23 8.07 11.143 8.251 C 11.056 8.429 10.936 8.591 10.784 8.737 C 10.635 8.88 10.466 9.012 10.277 9.133 C 10.001 9.307 9.766 9.5 9.574 9.709 C 9.382 9.916 9.233 10.189 9.127 10.529 C 9.025 10.869 8.972 11.327 8.969 11.902 Z M 9.057 14.695 C 9.259 14.898 9.5 15 9.779 15 C 9.965 15 10.134 14.954 10.286 14.862 C 10.441 14.766 10.566 14.639 10.659 14.48 C 10.755 14.322 10.803 14.145 10.803 13.951 C 10.803 13.665 10.701 13.421 10.496 13.217 C 10.294 13.014 10.055 12.912 9.779 12.912 C 9.5 12.912 9.259 13.014 9.057 13.217 C 8.856 13.421 8.755 13.665 8.755 13.951 C 8.755 14.244 8.856 14.492 9.057 14.695 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "history": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.500\" height=\"19.173\" viewBox=\"0 0 17.500 19.173\" fill=\"none\">\n  <path d=\"M 11.609 1.4 C 11.967 1.193 12.09 0.734 11.883 0.375 C 11.676 0.016 11.217 -0.107 10.859 0.101 L 8.409 1.515 C 8.05 1.722 7.927 2.181 8.135 2.539 L 9.549 4.989 C 9.756 5.348 10.215 5.47 10.573 5.263 C 10.932 5.056 11.055 4.598 10.848 4.239 L 10.334 3.348 C 11.202 3.542 12.031 3.896 12.778 4.395 C 13.97 5.192 14.899 6.324 15.448 7.649 C 15.997 8.973 16.14 10.431 15.861 11.838 C 15.581 13.244 14.89 14.536 13.877 15.55 C 12.863 16.564 11.571 17.254 10.164 17.534 C 8.758 17.814 7.3 17.67 5.976 17.121 C 4.651 16.573 3.518 15.643 2.722 14.451 C 1.925 13.259 1.5 11.857 1.5 10.423 C 1.5 10.009 1.164 9.673 0.75 9.673 C 0.336 9.673 0 10.009 0 10.423 C 0 12.154 0.513 13.845 1.475 15.284 C 2.436 16.723 3.803 17.845 5.402 18.507 C 7 19.169 8.76 19.343 10.457 19.005 C 12.154 18.667 13.713 17.834 14.937 16.61 C 16.161 15.387 16.994 13.828 17.332 12.13 C 17.669 10.433 17.496 8.674 16.834 7.075 C 16.172 5.476 15.05 4.109 13.611 3.148 C 12.732 2.56 11.758 2.14 10.738 1.902 L 11.609 1.4 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 7.75 6.673 C 8.164 6.673 8.5 7.009 8.5 7.423 L 8.5 11.673 L 11.75 11.673 C 12.164 11.673 12.5 12.009 12.5 12.423 C 12.5 12.837 12.164 13.173 11.75 13.173 L 7.75 13.173 C 7.336 13.173 7 12.837 7 12.423 L 7 7.423 C 7 7.009 7.336 6.673 7.75 6.673 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "image-ai": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"18\" viewBox=\"0 0 20 18\" fill=\"none\">\n  <path d=\"M 13.612 0.426 C 13.402 -0.142 12.598 -0.142 12.388 0.426 L 12.097 1.212 C 12.031 1.391 11.891 1.531 11.712 1.597 L 10.926 1.888 C 10.358 2.098 10.358 2.902 10.926 3.112 L 11.712 3.403 C 11.891 3.469 12.031 3.609 12.097 3.788 L 12.388 4.574 C 12.598 5.142 13.402 5.142 13.612 4.574 L 13.903 3.788 C 13.969 3.609 14.109 3.469 14.288 3.403 L 15.074 3.112 C 15.642 2.902 15.642 2.098 15.074 1.888 L 14.288 1.597 C 14.109 1.531 13.969 1.391 13.903 1.212 L 13.612 0.426 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 8.25 2 C 8.664 2 9 2.336 9 2.75 C 9 3.164 8.664 3.5 8.25 3.5 L 4 3.5 C 2.619 3.5 1.5 4.619 1.5 6 L 1.5 14 C 1.5 14.386 1.587 14.751 1.743 15.078 L 3.934 12.065 C 4.942 10.679 7.038 10.772 7.919 12.241 C 8.301 12.877 9.247 12.797 9.515 12.106 L 10.619 9.268 C 11.323 7.457 13.81 7.265 14.783 8.947 L 18.29 15.004 C 18.425 14.697 18.5 14.357 18.5 14 L 18.5 9.75 C 18.5 9.336 18.836 9 19.25 9 C 19.664 9 20 9.336 20 9.75 L 20 14 C 20 16.209 18.209 18 16 18 L 4 18 C 1.791 18 0 16.209 0 14 L 0 6 C 0 3.791 1.791 2 4 2 L 8.25 2 Z M 17.234 16.174 L 13.485 9.699 C 13.142 9.106 12.265 9.173 12.017 9.812 L 10.913 12.649 C 10.193 14.503 7.656 14.718 6.633 13.013 C 6.305 12.465 5.523 12.431 5.147 12.947 L 2.79 16.188 C 3.149 16.387 3.561 16.5 4 16.5 L 16 16.5 C 16.449 16.5 16.87 16.382 17.234 16.174 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 7 6.5 C 7 7.328 6.328 8 5.5 8 C 4.672 8 4 7.328 4 6.5 C 4 5.672 4.672 5 5.5 5 C 6.328 5 7 5.672 7 6.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 16.266 3.511 C 16.518 2.83 17.482 2.83 17.734 3.511 L 18.083 4.454 C 18.162 4.669 18.331 4.838 18.546 4.917 L 19.489 5.266 C 20.17 5.518 20.17 6.482 19.489 6.734 L 18.546 7.083 C 18.331 7.162 18.162 7.331 18.083 7.546 L 17.734 8.489 C 17.482 9.17 16.518 9.17 16.266 8.489 L 15.917 7.546 C 15.838 7.331 15.669 7.162 15.454 7.083 L 14.511 6.734 C 13.83 6.482 13.83 5.518 14.511 5.266 L 15.454 4.917 C 15.669 4.838 15.838 4.669 15.917 4.454 L 16.266 3.511 Z M 16.564 6 C 16.729 5.875 16.875 5.729 17 5.564 C 17.125 5.729 17.271 5.875 17.436 6 C 17.271 6.125 17.125 6.271 17 6.436 C 16.875 6.271 16.729 6.125 16.564 6 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "light-bulb-filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"19.498\" viewBox=\"0 0 16 19.498\" fill=\"none\">\n  <path d=\"M 0 8 C 0 3.5 3.582 0 8 0 C 12.418 0 16 3.5 16 8 C 16 11.427 13.68 13.694 12.574 14.58 C 12.227 14.858 12 15.27 12 15.713 C 12 16.424 11.424 17 10.713 17 L 5.287 17 C 4.576 17 4 16.424 4 15.713 C 4 15.27 3.773 14.858 3.426 14.58 C 2.32 13.694 0 11.427 0 8 Z M 1.5 8 C 1.5 4.338 4.4 1.5 8 1.5 C 11.6 1.5 14.5 4.338 14.5 8 C 14.5 10.726 12.638 12.607 11.636 13.41 C 11.038 13.889 10.574 14.627 10.508 15.5 L 5.492 15.5 C 5.426 14.627 4.962 13.889 4.364 13.41 C 3.362 12.607 1.5 10.726 1.5 8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 5.123 17.76 C 4.715 17.692 4.328 17.968 4.26 18.377 C 4.192 18.785 4.468 19.172 4.877 19.24 C 6.945 19.584 9.055 19.584 11.123 19.24 C 11.532 19.172 11.808 18.785 11.74 18.377 C 11.672 17.968 11.285 17.692 10.877 17.76 C 8.972 18.078 7.028 18.078 5.123 17.76 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 8 1.5 C 4.4 1.5 1.5 4.338 1.5 8 C 1.5 10.726 3.362 12.607 4.364 13.41 C 4.962 13.889 5.426 14.627 5.492 15.5 L 10.508 15.5 C 10.574 14.627 11.038 13.889 11.636 13.41 C 12.638 12.607 14.5 10.726 14.5 8 C 14.5 4.338 11.6 1.5 8 1.5 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "light-bulb": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"19.498\" viewBox=\"0 0 16 19.498\" fill=\"none\">\n  <path d=\"M 0 8 C 0 3.5 3.582 0 8 0 C 12.418 0 16 3.5 16 8 C 16 11.427 13.68 13.694 12.574 14.58 C 12.227 14.858 12 15.27 12 15.713 C 12 16.424 11.424 17 10.713 17 L 5.287 17 C 4.576 17 4 16.424 4 15.713 C 4 15.27 3.773 14.858 3.426 14.58 C 2.32 13.694 0 11.427 0 8 Z M 1.5 8 C 1.5 4.338 4.4 1.5 8 1.5 C 11.6 1.5 14.5 4.338 14.5 8 C 14.5 10.726 12.638 12.607 11.636 13.41 C 11.038 13.889 10.574 14.627 10.508 15.5 L 5.492 15.5 C 5.426 14.627 4.962 13.889 4.364 13.41 C 3.362 12.607 1.5 10.726 1.5 8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 5.123 17.76 C 4.715 17.692 4.328 17.968 4.26 18.377 C 4.192 18.785 4.468 19.172 4.877 19.24 C 6.945 19.584 9.055 19.584 11.123 19.24 C 11.532 19.172 11.808 18.785 11.74 18.377 C 11.672 17.968 11.285 17.692 10.877 17.76 C 8.972 18.078 7.028 18.078 5.123 17.76 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "link-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.571\" height=\"16.571\" viewBox=\"0 0 16.571 16.571\" fill=\"none\">\n  <path d=\"M 14.119 2.452 C 12.85 1.183 10.792 1.183 9.523 2.452 L 8.109 3.866 C 7.816 4.159 7.341 4.159 7.048 3.866 C 6.755 3.573 6.755 3.098 7.048 2.805 L 8.462 1.391 C 10.317 -0.464 13.325 -0.464 15.18 1.391 C 17.035 3.246 17.035 6.254 15.18 8.109 L 13.766 9.523 C 13.473 9.816 12.998 9.816 12.705 9.523 C 12.412 9.23 12.412 8.755 12.705 8.462 L 14.119 7.048 C 15.388 5.779 15.388 3.721 14.119 2.452 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 3.866 7.048 C 4.159 7.341 4.159 7.816 3.866 8.109 L 2.452 9.523 C 1.183 10.792 1.183 12.85 2.452 14.119 C 3.721 15.388 5.779 15.388 7.048 14.119 L 8.462 12.705 C 8.755 12.412 9.23 12.412 9.523 12.705 C 9.816 12.998 9.816 13.473 9.523 13.766 L 8.109 15.18 C 6.254 17.035 3.246 17.035 1.391 15.18 C -0.464 13.325 -0.464 10.317 1.391 8.462 L 2.805 7.048 C 3.098 6.755 3.573 6.755 3.866 7.048 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 5.634 9.877 C 5.341 10.169 5.341 10.644 5.634 10.937 C 5.927 11.23 6.402 11.23 6.695 10.937 L 10.937 6.695 C 11.23 6.402 11.23 5.927 10.937 5.634 C 10.644 5.341 10.169 5.341 9.876 5.634 L 5.634 9.877 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "message-add-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.565\" height=\"19.001\" viewBox=\"0 0 19.565 19.001\" fill=\"none\">\n  <path d=\"M 3.226 9.373 C 3.246 5.298 6.559 2 10.645 2 C 11.166 2 11.674 2.053 12.163 2.155 C 12.568 2.239 12.965 1.978 13.049 1.573 C 13.134 1.167 12.873 0.77 12.467 0.686 C 11.879 0.564 11.269 0.5 10.645 0.5 C 5.72 0.5 1.726 4.488 1.726 9.41 L 1.726 9.448 L 2.063 12.766 C 2.061 12.787 2.056 12.82 2.048 12.862 C 2.029 12.965 1.987 13.125 1.897 13.316 C 1.722 13.688 1.349 14.214 0.528 14.675 C 0.336 14.783 0.133 14.971 0.044 15.26 C -0.046 15.548 0.015 15.819 0.112 16.019 C 0.29 16.385 0.651 16.663 1.028 16.874 C 1.822 17.319 3.17 17.736 5.2 17.991 L 6.622 18.254 L 7.25 18.474 C 13.268 20.577 19.565 16.117 19.565 9.747 L 19.565 9.41 C 19.565 8.594 19.455 7.804 19.249 7.052 C 19.14 6.652 18.727 6.417 18.327 6.527 C 17.928 6.636 17.693 7.049 17.802 7.448 C 17.973 8.072 18.065 8.73 18.065 9.41 L 18.065 9.747 C 18.065 15.081 12.79 18.821 7.745 17.058 L 7.008 16.8 L 5.43 16.509 L 5.408 16.506 C 3.544 16.273 2.425 15.912 1.844 15.61 C 2.579 15.074 3.009 14.477 3.254 13.954 C 3.405 13.635 3.482 13.352 3.522 13.141 C 3.542 13.035 3.553 12.947 3.559 12.881 C 3.561 12.847 3.563 12.819 3.564 12.797 C 3.564 12.786 3.565 12.777 3.565 12.769 L 3.565 12.758 L 3.565 12.753 L 3.565 12.751 C 3.565 12.751 4.272 12.749 3.522 12.75 L 3.565 12.749 L 3.565 12.712 L 3.226 9.373 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 17.565 0.75 C 17.565 0.336 17.229 0 16.815 0 C 16.401 0 16.065 0.336 16.065 0.75 L 16.065 2 L 14.815 2 C 14.401 2 14.065 2.336 14.065 2.75 C 14.065 3.164 14.401 3.5 14.815 3.5 L 16.065 3.5 L 16.065 4.75 C 16.065 5.164 16.401 5.5 16.815 5.5 C 17.229 5.5 17.565 5.164 17.565 4.75 L 17.565 3.5 L 18.815 3.5 C 19.229 3.5 19.565 3.164 19.565 2.75 C 19.565 2.336 19.229 2 18.815 2 L 17.565 2 L 17.565 0.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 6.815 11.25 C 7.367 11.25 7.815 10.802 7.815 10.25 C 7.815 9.698 7.367 9.25 6.815 9.25 C 6.263 9.25 5.815 9.698 5.815 10.25 C 5.815 10.802 6.263 11.25 6.815 11.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 10.815 11.25 C 11.367 11.25 11.815 10.802 11.815 10.25 C 11.815 9.698 11.367 9.25 10.815 9.25 C 10.263 9.25 9.815 9.698 9.815 10.25 C 9.815 10.802 10.263 11.25 10.815 11.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 15.815 10.25 C 15.815 10.802 15.367 11.25 14.815 11.25 C 14.263 11.25 13.815 10.802 13.815 10.25 C 13.815 9.698 14.263 9.25 14.815 9.25 C 15.367 9.25 15.815 9.698 15.815 10.25 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "microphone-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15.937\" height=\"19.750\" viewBox=\"0 0 15.937 19.750\" fill=\"none\">\n  <path d=\"M 7.968 0 C 4.655 0 1.968 2.686 1.968 6 L 1.968 10 C 1.968 13.314 4.655 16 7.968 16 C 11.282 16 13.968 13.314 13.968 10 L 13.968 6 C 13.968 2.686 11.282 0 7.968 0 Z M 12.468 10 L 12.468 6 C 12.468 3.515 10.454 1.5 7.968 1.5 C 5.483 1.5 3.468 3.515 3.468 6 L 3.468 10 C 3.468 12.485 5.483 14.5 7.968 14.5 C 10.454 14.5 12.468 12.485 12.468 10 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 8.718 17.965 C 8.718 17.977 8.718 17.988 8.718 18 L 8.718 19 C 8.718 19.414 8.383 19.75 7.968 19.75 C 7.554 19.75 7.218 19.414 7.218 19 L 7.218 18 C 7.218 17.988 7.219 17.977 7.219 17.965 C 3.399 17.611 0.358 14.57 0.003 10.749 C -0.035 10.337 0.304 10 0.718 10 C 1.133 10 1.464 10.337 1.511 10.749 C 1.882 13.986 4.632 16.5 7.968 16.5 C 11.305 16.5 14.054 13.986 14.426 10.749 C 14.473 10.337 14.804 10 15.218 10 C 15.633 10 15.972 10.337 15.934 10.749 C 15.579 14.57 12.538 17.611 8.718 17.965 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "music-note": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.500\" height=\"16.491\" viewBox=\"0 0 16.500 16.491\" fill=\"none\">\n  <path d=\"M 16.372 3.33 C 16.372 3.33 16.372 3.33 15.75 3.748 L 16.372 3.33 C 16.527 3.559 16.542 3.856 16.412 4.101 C 16.282 4.345 16.027 4.498 15.75 4.498 L 10.5 4.498 L 10.5 11.741 C 10.5 14.364 8.373 16.491 5.75 16.491 L 3.748 16.491 C 1.678 16.491 0 14.813 0 12.743 C 0 10.673 1.678 8.995 3.748 8.995 L 9 8.995 L 9 1.699 C 9 0.781 9.733 -0.037 10.728 0.001 C 11.498 0.031 12.71 0.141 13.585 0.579 C 14.345 0.959 15.052 1.683 15.532 2.241 C 15.782 2.532 15.99 2.801 16.136 2.998 C 16.209 3.097 16.267 3.178 16.307 3.235 C 16.327 3.264 16.343 3.286 16.354 3.302 L 16.367 3.321 L 16.37 3.327 L 16.372 3.33 Z M 10.5 1.699 C 10.5 1.631 10.526 1.577 10.559 1.544 C 10.59 1.513 10.625 1.498 10.67 1.5 C 11.433 1.53 12.354 1.64 12.915 1.921 C 13.324 2.125 13.784 2.543 14.199 2.998 L 10.5 2.998 L 10.5 1.699 Z M 1.5 12.743 C 1.5 11.501 2.507 10.495 3.748 10.495 L 9 10.495 L 9 11.741 C 9 13.536 7.545 14.991 5.75 14.991 L 3.748 14.991 C 2.507 14.991 1.5 13.985 1.5 12.743 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "pin-solid": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.750\" height=\"16.780\" viewBox=\"0 0 16.750 16.780\" fill=\"none\">\n  <path d=\"M 13.323 0.588 L 16.162 3.427 C 16.946 4.211 16.946 5.482 16.162 6.266 L 13.658 8.77 C 13.438 8.99 13.272 9.259 13.173 9.555 L 12.221 12.411 C 11.749 13.827 9.952 14.251 8.897 13.196 L 6.771 11.07 L 1.28 16.56 C 0.987 16.853 0.513 16.853 0.22 16.56 C -0.073 16.267 -0.073 15.792 0.22 15.499 L 5.71 10.009 L 3.554 7.853 C 2.499 6.798 2.923 5.001 4.339 4.529 L 7.195 3.577 C 7.491 3.478 7.76 3.312 7.98 3.092 L 10.484 0.588 C 11.268 -0.196 12.539 -0.196 13.323 0.588 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "pin": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.500\" height=\"17.530\" viewBox=\"0 0 17.500 17.530\" fill=\"none\">\n  <path d=\"M 13.853 0.808 C 12.776 -0.269 11.031 -0.269 9.954 0.808 L 7.45 3.312 C 7.312 3.45 7.143 3.554 6.958 3.615 L 4.102 4.568 C 2.157 5.216 1.574 7.684 3.024 9.133 L 5.18 11.289 L 0.22 16.249 C -0.073 16.542 -0.073 17.017 0.22 17.31 C 0.513 17.603 0.987 17.603 1.28 17.31 L 6.24 12.35 L 8.367 14.476 C 9.816 15.926 12.284 15.343 12.932 13.398 L 13.885 10.542 C 13.946 10.357 14.05 10.188 14.188 10.05 L 16.692 7.546 C 17.769 6.469 17.769 4.724 16.692 3.647 L 13.853 0.808 Z M 6.872 10.86 L 9.427 13.416 C 10.088 14.077 11.214 13.811 11.509 12.924 L 12.462 10.067 C 12.597 9.661 12.825 9.292 13.128 8.99 L 15.632 6.486 C 16.123 5.995 16.123 5.198 15.632 4.707 L 12.793 1.868 C 12.302 1.377 11.505 1.377 11.014 1.868 L 8.51 4.372 C 8.208 4.675 7.839 4.903 7.433 5.038 L 4.576 5.991 C 3.689 6.286 3.423 7.412 4.084 8.073 L 6.67 10.658 C 6.709 10.684 6.746 10.715 6.78 10.749 C 6.815 10.784 6.845 10.821 6.872 10.86 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "search": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18.750\" height=\"18.750\" viewBox=\"0 0 18.750 18.750\" fill=\"none\">\n  <path d=\"M 12.845 14.366 C 11.501 15.391 9.821 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 C 16 10.071 15.213 11.959 13.921 13.379 C 13.948 13.398 13.974 13.418 13.998 13.439 L 18.498 17.439 C 18.808 17.715 18.836 18.189 18.561 18.498 C 18.285 18.808 17.811 18.836 17.502 18.561 L 13.002 14.561 C 12.937 14.503 12.885 14.437 12.845 14.366 Z M 14.5 8 C 14.5 11.59 11.59 14.5 8 14.5 C 4.41 14.5 1.5 11.59 1.5 8 C 1.5 4.41 4.41 1.5 8 1.5 C 11.59 1.5 14.5 4.41 14.5 8 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "send-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20.833\" height=\"20.113\" viewBox=\"0 0 20.833 20.113\" fill=\"none\">\n  <path d=\"M 0.309 4.864 C -0.991 1.939 2.047 -1.026 4.939 0.345 L 18.86 6.938 C 21.491 8.185 21.491 11.928 18.86 13.175 L 4.939 19.768 C 2.047 21.139 -0.991 18.174 0.309 15.249 L 2.265 10.849 C 2.489 10.344 2.489 9.769 2.265 9.264 L 0.309 4.864 Z M 4.297 1.7 C 2.662 0.926 0.945 2.602 1.68 4.255 L 3.636 8.655 C 3.73 8.866 3.801 9.084 3.851 9.306 C 3.851 9.306 3.924 9.766 3.923 10.062 C 3.923 10.354 3.851 10.806 3.851 10.806 C 3.801 11.028 3.73 11.247 3.636 11.458 L 1.68 15.858 C 0.945 17.511 2.662 19.187 4.297 18.413 L 18.217 11.819 C 19.705 11.115 19.705 8.998 18.217 8.294 L 4.297 1.7 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "settings": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"18.857\" viewBox=\"0 0 20 18.857\" fill=\"none\">\n  <path d=\"M 15 9.428 C 15 12.19 12.761 14.428 10 14.428 C 7.239 14.428 5 12.19 5 9.428 C 5 6.667 7.239 4.428 10 4.428 C 12.761 4.428 15 6.667 15 9.428 Z M 13.5 9.428 C 13.5 11.361 11.933 12.928 10 12.928 C 8.067 12.928 6.5 11.361 6.5 9.428 C 6.5 7.495 8.067 5.928 10 5.928 C 11.933 5.928 13.5 7.495 13.5 9.428 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 4.134 1.268 C 3.177 1.821 2.85 3.044 3.402 4 C 4.025 5.08 3.246 6.429 2 6.429 C 0.895 6.429 0 7.324 0 8.429 L 0 10.429 C 0 11.533 0.895 12.429 2 12.429 C 3.246 12.429 4.025 13.778 3.402 14.857 C 2.85 15.813 3.177 17.037 4.134 17.589 L 5.866 18.589 C 6.823 19.141 8.046 18.813 8.598 17.857 C 9.221 16.778 10.779 16.778 11.402 17.857 C 11.954 18.813 13.177 19.141 14.134 18.589 L 15.866 17.589 C 16.823 17.037 17.15 15.813 16.598 14.857 C 15.975 13.778 16.754 12.429 18 12.429 C 19.105 12.429 20 11.533 20 10.429 L 20 8.429 C 20 7.324 19.105 6.429 18 6.429 C 16.754 6.429 15.975 5.08 16.598 4 C 17.15 3.044 16.823 1.821 15.866 1.268 L 14.134 0.268 C 13.177 -0.284 11.954 0.044 11.402 1 C 10.779 2.08 9.221 2.08 8.598 1 C 8.046 0.044 6.823 -0.284 5.866 0.268 L 4.134 1.268 Z M 4.701 3.25 C 4.563 3.011 4.645 2.705 4.884 2.567 L 6.616 1.567 C 6.855 1.429 7.161 1.511 7.299 1.75 C 8.499 3.83 11.501 3.83 12.701 1.75 C 12.839 1.511 13.145 1.429 13.384 1.567 L 15.116 2.567 C 15.355 2.705 15.437 3.011 15.299 3.25 C 14.099 5.33 15.599 7.929 18 7.929 C 18.276 7.929 18.5 8.152 18.5 8.429 L 18.5 10.429 C 18.5 10.705 18.276 10.929 18 10.929 C 15.599 10.929 14.099 13.528 15.299 15.607 C 15.437 15.846 15.355 16.152 15.116 16.29 L 13.384 17.29 C 13.145 17.428 12.839 17.346 12.701 17.107 C 11.501 15.028 8.499 15.028 7.299 17.107 C 7.161 17.346 6.855 17.428 6.616 17.29 L 4.884 16.29 C 4.645 16.152 4.563 15.846 4.701 15.607 C 5.901 13.528 4.401 10.929 2 10.929 C 1.724 10.929 1.5 10.705 1.5 10.429 L 1.5 8.429 C 1.5 8.152 1.724 7.929 2 7.929 C 4.401 7.929 5.901 5.33 4.701 3.25 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "star-filled": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"17\" viewBox=\"0 0 18 17\" fill=\"none\">\n  <path d=\"M 8.029 0.523 C 8.483 -0.174 9.517 -0.174 9.971 0.523 L 12.297 4.096 C 12.453 4.336 12.695 4.51 12.975 4.582 L 17.138 5.661 C 17.951 5.871 18.271 6.841 17.738 7.482 L 15.013 10.769 C 14.83 10.99 14.737 11.271 14.754 11.555 L 15.001 15.795 C 15.049 16.623 14.213 17.222 13.43 16.921 L 9.419 15.379 C 9.149 15.276 8.851 15.276 8.581 15.379 L 4.57 16.921 C 3.787 17.222 2.951 16.623 2.999 15.795 L 3.246 11.555 C 3.263 11.271 3.17 10.99 2.987 10.769 L 0.262 7.482 C -0.271 6.841 0.049 5.871 0.862 5.661 L 5.025 4.582 C 5.305 4.51 5.547 4.336 5.703 4.096 L 8.029 0.523 Z M 6.96 4.915 L 9 1.781 L 11.04 4.915 C 11.403 5.472 11.96 5.869 12.599 6.034 L 16.214 6.971 L 13.858 9.812 C 13.434 10.323 13.218 10.976 13.256 11.643 L 13.471 15.33 L 9.957 13.979 C 9.341 13.742 8.659 13.742 8.043 13.979 L 4.529 15.33 L 4.744 11.643 C 4.782 10.976 4.566 10.323 4.142 9.812 L 1.786 6.971 L 5.401 6.034 C 6.04 5.869 6.597 5.472 6.96 4.915 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 9 1.781 L 6.96 4.915 C 6.597 5.472 6.04 5.869 5.401 6.034 L 1.786 6.971 L 4.142 9.812 C 4.566 10.323 4.782 10.976 4.744 11.643 L 4.529 15.33 L 8.043 13.979 C 8.659 13.742 9.341 13.742 9.957 13.979 L 13.471 15.33 L 13.256 11.643 C 13.218 10.976 13.434 10.323 13.858 9.812 L 16.214 6.971 L 12.599 6.034 C 11.96 5.869 11.403 5.472 11.04 4.915 L 9 1.781 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "star": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"17\" viewBox=\"0 0 18 17\" fill=\"none\">\n  <path d=\"M 8.029 0.523 C 8.483 -0.174 9.517 -0.174 9.971 0.523 L 12.297 4.096 C 12.453 4.336 12.695 4.51 12.975 4.582 L 17.138 5.661 C 17.951 5.871 18.271 6.841 17.738 7.482 L 15.013 10.769 C 14.83 10.99 14.737 11.271 14.754 11.555 L 15.001 15.795 C 15.049 16.623 14.213 17.222 13.43 16.921 L 9.419 15.379 C 9.149 15.276 8.851 15.276 8.581 15.379 L 4.57 16.921 C 3.787 17.222 2.951 16.623 2.999 15.795 L 3.246 11.555 C 3.263 11.271 3.17 10.99 2.987 10.769 L 0.262 7.482 C -0.271 6.841 0.049 5.871 0.862 5.661 L 5.025 4.582 C 5.305 4.51 5.547 4.336 5.703 4.096 L 8.029 0.523 Z M 6.96 4.915 L 9 1.781 L 11.04 4.915 C 11.403 5.472 11.96 5.869 12.599 6.034 L 16.214 6.971 L 13.858 9.812 C 13.434 10.323 13.218 10.976 13.256 11.643 L 13.471 15.33 L 9.957 13.979 C 9.341 13.742 8.659 13.742 8.043 13.979 L 4.529 15.33 L 4.744 11.643 C 4.782 10.976 4.566 10.323 4.142 9.812 L 1.786 6.971 L 5.401 6.034 C 6.04 5.869 6.597 5.472 6.96 4.915 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "stop": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path transform=\"translate(3 3)\" d=\"M 14 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 14 C 0 16.209 1.791 18 4 18 L 14 18 C 16.209 18 18 16.209 18 14 L 18 4 C 18 1.791 16.209 0 14 0 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>",
  "sync": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.430\" height=\"17.500\" viewBox=\"0 0 21.430 17.500\" fill=\"none\">\n  <path d=\"M 17.907 8.166 C 17.609 4.435 14.487 1.5 10.68 1.5 C 8.39 1.5 6.349 2.56 5.02 4.219 C 4.791 4.504 4.583 4.807 4.399 5.126 C 4.192 5.484 3.733 5.607 3.374 5.399 C 3.016 5.192 2.893 4.733 3.101 4.374 C 3.323 3.99 3.573 3.625 3.849 3.281 C 5.451 1.282 7.916 0 10.68 0 C 15.329 0 19.132 3.627 19.413 8.206 L 20.149 7.47 C 20.442 7.177 20.917 7.177 21.21 7.47 C 21.503 7.763 21.503 8.237 21.21 8.53 L 19.21 10.53 C 18.917 10.823 18.442 10.823 18.149 10.53 L 16.149 8.53 C 15.856 8.237 15.856 7.763 16.149 7.47 C 16.442 7.177 16.917 7.177 17.21 7.47 L 17.907 8.166 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 0.22 8.97 C -0.073 9.263 -0.073 9.737 0.22 10.03 C 0.513 10.323 0.987 10.323 1.28 10.03 L 2.017 9.294 C 2.298 13.873 6.1 17.5 10.75 17.5 C 13.514 17.5 15.978 16.218 17.581 14.219 C 17.856 13.875 18.107 13.51 18.329 13.126 C 18.536 12.767 18.414 12.308 18.055 12.101 C 17.697 11.893 17.238 12.016 17.031 12.374 C 16.847 12.693 16.639 12.996 16.41 13.281 C 15.08 14.94 13.039 16 10.75 16 C 6.942 16 3.82 13.065 3.523 9.334 L 4.22 10.03 C 4.513 10.323 4.987 10.323 5.28 10.03 C 5.573 9.737 5.573 9.263 5.28 8.97 L 3.28 6.97 C 2.987 6.677 2.513 6.677 2.22 6.97 L 0.22 8.97 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "tick": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path transform=\"translate(4.25 6.25)\" d=\"M 15.286 1.275 C 15.576 0.979 15.571 0.504 15.275 0.214 C 14.979 -0.076 14.504 -0.071 14.214 0.225 L 5.843 8.767 C 5.353 9.268 4.547 9.268 4.057 8.767 L 1.286 5.939 C 0.996 5.644 0.521 5.639 0.225 5.929 C -0.071 6.219 -0.076 6.693 0.214 6.989 L 2.986 9.817 C 4.064 10.918 5.836 10.918 6.914 9.817 L 15.286 1.275 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>",
  "trash-alt": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17.500\" height=\"19.500\" viewBox=\"0 0 17.500 19.500\" fill=\"none\">\n  <path d=\"M 3.652 3.206 C 3.586 3.215 3.523 3.232 3.464 3.256 C 2.678 3.318 1.988 3.379 1.491 3.425 C 1.236 3.449 1.033 3.468 0.892 3.482 L 0.73 3.498 L 0.675 3.504 L 0.673 3.504 C 0.261 3.546 -0.038 3.915 0.004 4.327 C 0.046 4.739 0.415 5.038 0.827 4.996 L 0.826 4.989 C 0.827 4.996 0.827 4.996 0.827 4.996 L 0.881 4.991 L 1.039 4.975 C 1.177 4.961 1.378 4.942 1.629 4.919 C 2.132 4.872 2.834 4.81 3.634 4.748 C 5.239 4.623 7.215 4.5 8.75 4.5 C 10.285 4.5 12.261 4.623 13.866 4.748 C 14.666 4.81 15.368 4.872 15.871 4.919 C 16.122 4.942 16.323 4.961 16.461 4.975 L 16.62 4.991 L 16.673 4.996 C 17.085 5.038 17.454 4.739 17.496 4.327 C 17.538 3.915 17.239 3.546 16.827 3.504 L 16.77 3.498 L 16.608 3.482 C 16.467 3.468 16.264 3.449 16.01 3.425 C 15.513 3.379 14.822 3.318 14.036 3.256 C 13.984 3.235 13.93 3.219 13.872 3.21 C 13.377 3.128 12.961 2.795 12.773 2.33 L 12.683 2.106 C 12.168 0.833 10.933 0 9.56 0 L 8.213 0 C 6.858 0 5.639 0.822 5.132 2.078 C 4.886 2.687 4.331 3.117 3.68 3.203 L 3.652 3.206 Z M 8.213 1.5 C 7.47 1.5 6.801 1.951 6.523 2.64 C 6.462 2.79 6.391 2.933 6.312 3.07 C 7.161 3.028 8.002 3 8.75 3 C 9.58 3 10.525 3.034 11.468 3.085 C 11.438 3.022 11.409 2.958 11.382 2.892 L 11.292 2.668 C 11.007 1.962 10.321 1.5 9.56 1.5 L 8.213 1.5 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n  <path d=\"M 15.497 6.815 C 15.533 6.402 15.228 6.039 14.815 6.003 C 14.402 5.967 14.039 6.272 14.003 6.685 L 13.198 15.945 C 13.097 17.108 12.123 18 10.956 18 L 6.144 18 C 4.94 18 3.949 17.051 3.896 15.848 L 3.499 6.717 C 3.481 6.304 3.131 5.983 2.717 6.001 C 2.304 6.019 1.983 6.369 2.001 6.783 L 2.398 15.913 C 2.485 17.919 4.136 19.5 6.144 19.5 L 10.956 19.5 C 12.901 19.5 14.524 18.013 14.692 16.075 L 15.497 6.815 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>",
  "video": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"13.500\" viewBox=\"0 0 20 13.500\" fill=\"none\">\n  <path d=\"M 4.75 0 C 2.127 0 0 2.127 0 4.75 L 0 8.75 C 0 11.373 2.127 13.5 4.75 13.5 L 12.25 13.5 C 14.059 13.5 15.603 12.37 16.217 10.778 L 17.013 11.573 C 18.115 12.676 20 11.895 20 10.336 L 20 3.164 C 20 1.605 18.115 0.824 17.013 1.927 L 16.217 2.722 C 15.603 1.13 14.059 0 12.25 0 L 4.75 0 Z M 18.073 10.513 L 16.5 8.939 L 16.5 4.561 L 18.073 2.987 C 18.231 2.83 18.5 2.941 18.5 3.164 L 18.5 10.336 C 18.5 10.559 18.231 10.67 18.073 10.513 Z M 1.5 4.75 C 1.5 2.955 2.955 1.5 4.75 1.5 L 12.25 1.5 C 13.769 1.5 15 2.731 15 4.25 L 15 9.25 C 15 10.769 13.769 12 12.25 12 L 4.75 12 C 2.955 12 1.5 10.545 1.5 8.75 L 1.5 4.75 Z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n</svg>",
  "voice-chat": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"20.500\" viewBox=\"0 0 19 20.500\" fill=\"none\">\n  <path d=\"M 0 5.75 C 0 5.336 0.336 5 0.75 5 C 1.164 5 1.5 5.336 1.5 5.75 L 1.5 14.75 C 1.5 15.164 1.164 15.5 0.75 15.5 C 0.336 15.5 0 15.164 0 14.75 L 0 5.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 3.5 0.75 C 3.5 0.336 3.836 0 4.25 0 C 4.664 0 5 0.336 5 0.75 L 5 19.75 C 5 20.164 4.664 20.5 4.25 20.5 C 3.836 20.5 3.5 20.164 3.5 19.75 L 3.5 0.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 7 2.75 C 7 2.336 7.336 2 7.75 2 C 8.164 2 8.5 2.336 8.5 2.75 L 8.5 16.75 C 8.5 17.164 8.164 17.5 7.75 17.5 C 7.336 17.5 7 17.164 7 16.75 L 7 2.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 10.5 4.75 C 10.5 4.336 10.836 4 11.25 4 C 11.664 4 12 4.336 12 4.75 L 12 14.75 C 12 15.164 11.664 15.5 11.25 15.5 C 10.836 15.5 10.5 15.164 10.5 14.75 L 10.5 4.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 14 1.75 C 14 1.336 14.336 1 14.75 1 C 15.164 1 15.5 1.336 15.5 1.75 L 15.5 17.75 C 15.5 18.164 15.164 18.5 14.75 18.5 C 14.336 18.5 14 18.164 14 17.75 L 14 1.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n  <path d=\"M 17.5 6.75 C 17.5 6.336 17.836 6 18.25 6 C 18.664 6 19 6.336 19 6.75 L 19 12.75 C 19 13.164 18.664 13.5 18.25 13.5 C 17.836 13.5 17.5 13.164 17.5 12.75 L 17.5 6.75 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>\n</svg>"
};
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { ICONS, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/icons-data.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a monochrome glyph from the iconixto linear set.
 * Inlines the SVG (currentColor), so color follows CSS `color`.
 */
function Icon({
  name,
  size = 24,
  color,
  style,
  className,
  title,
  ...rest
}) {
  const raw = __ds_scope.ICONS[name];
  const wrap = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    flex: "0 0 auto",
    color: color || "inherit",
    lineHeight: 0,
    ...style
  };
  if (!raw) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: wrap
    }, rest));
  }
  const html = raw.replace(/<svg([^>]*?)>/, '<svg$1 width="100%" height="100%" style="display:block">').replace(/<svg([^>]*?)(width|height)="[^"]*"/g, "<svg$1");
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    className: className,
    style: wrap
  }, rest, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — text action. Variants: primary (accent), danger, outline, ghost.
 * Pill-radius chrome lives in IconButton/Pill; text buttons use radius-md.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    md: {
      height: 48,
      padX: 32,
      font: 16,
      radius: "var(--radius-md)",
      icon: 24
    },
    sm: {
      height: 40,
      padX: 20,
      font: 16,
      radius: "var(--radius-md)",
      icon: 20
    },
    xs: {
      height: 32,
      padX: 14,
      font: 14,
      radius: "var(--radius-sm)",
      icon: 18
    }
  }[size];
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      boxShadow: "none"
    },
    danger: {
      background: "var(--danger)",
      color: "var(--text-on-accent)",
      boxShadow: "none"
    },
    outline: {
      background: "var(--surface-base)",
      color: "var(--text-primary)",
      boxShadow: "var(--ring)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      width: fullWidth ? "100%" : "auto",
      height: sizes.height,
      padding: `0 ${sizes.padX}px`,
      border: "none",
      borderRadius: sizes.radius,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-medium)",
      fontSize: sizes.font,
      lineHeight: "24px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      transition: "filter var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: sizes.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sizes.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — compact pill for instruments / quick actions in the composer
 * ("Create image", "Search", "Think"). Toggles between resting and picked.
 */
function Chip({
  label,
  icon,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 32,
      padding: icon ? "0 12px 0 10px" : "0 12px",
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--fw-medium)",
      whiteSpace: "nowrap",
      flex: "0 0 auto",
      transition: "background var(--dur-fast) var(--ease-out)",
      background: selected ? "rgba(37,115,233,0.12)" : hover ? "var(--surface-raised)" : "transparent",
      color: selected ? "var(--accent)" : "var(--text-secondary)",
      boxShadow: selected ? "inset 0 0 0 1px rgba(37,115,233,0.32)" : "var(--ring-subtle)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), label);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — round, single-glyph control. The workhorse of the chat chrome
 * (header actions, composer +, mic). Variants set the fill.
 */
function IconButton({
  icon,
  variant = "ghost",
  size = 40,
  active = false,
  disabled = false,
  iconSize,
  style,
  ...rest
}) {
  const isAccent = variant === "accent" || variant === "voice";
  const variants = {
    ghost: {
      background: active ? "var(--surface-raised)" : "transparent",
      color: "var(--ink-icon)",
      boxShadow: "none"
    },
    glass: {
      background: "var(--surface-glass)",
      color: "var(--ink-icon)",
      boxShadow: "var(--ring)",
      backdropFilter: "blur(var(--blur-md))"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      boxShadow: "none"
    },
    voice: {
      background: "var(--accent-voice)",
      color: "var(--accent-contrast)",
      boxShadow: "none"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      padding: 0,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      flex: "0 0 auto",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...variants,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && variant === "ghost" && !active) e.currentTarget.style.background = "var(--surface-raised)";
    },
    onMouseLeave: e => {
      if (variant === "ghost" && !active) e.currentTarget.style.background = "transparent";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || (size >= 40 ? 24 : 22),
    color: isAccent ? "currentColor" : undefined
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Composer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Waveform({
  color = "var(--ink-icon)"
}) {
  const bars = [10, 18, 8, 22, 8, 18, 10];
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      height: 24,
      padding: "0 2px"
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2.5,
      height: h,
      borderRadius: 2,
      background: color,
      opacity: 0.85
    }
  })));
}

/**
 * Composer — the frosted "Ask AI" input bar. The single most recognizable
 * element of the product. A + (attach) button, the text field, an optional
 * voice waveform, and a mic (or send) button.
 */
function Composer({
  value = "",
  onChange,
  onSend,
  placeholder = "Ask AI",
  showAttach = true,
  showWaveform = true,
  mode = "mic",
  // "mic" | "send"
  leftSlot,
  style,
  ...rest
}) {
  const canSend = value && value.trim().length > 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 10px 10px 12px",
      borderRadius: "var(--radius-frame)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-sm))",
      WebkitBackdropFilter: "blur(var(--blur-sm))",
      boxShadow: "var(--ring), var(--shadow-glass)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), showAttach && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "add",
    variant: "ghost",
    size: 40
  }), leftSlot, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && canSend && onSend) onSend();
    },
    placeholder: placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)"
    }
  }), mode === "mic" && !canSend ? /*#__PURE__*/React.createElement(React.Fragment, null, showWaveform && /*#__PURE__*/React.createElement(Waveform, null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "microphone-alt",
    variant: "voice",
    size: 40
  })) : /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "send-alt",
    variant: "accent",
    size: 40,
    onClick: () => canSend && onSend && onSend(),
    disabled: !canSend
  }));
}
Object.assign(__ds_scope, { Composer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Composer.jsx", error: String((e && e.message) || e) }); }

// components/core/MenuRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MenuRow — list row used in Settings, modal menus and dropdowns.
 * Label on the left; a trailing control on the right (check, value+chevron,
 * a Toggle, or any node). Hover paints a soft paper fill.
 */
function MenuRow({
  label,
  leadingIcon,
  sublabel,
  trailing,
  value,
  selected = false,
  showChevron = false,
  destructive = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = destructive ? "var(--danger)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minHeight: 48,
      padding: "10px 14px",
      borderRadius: "var(--radius-sm)",
      background: hover ? "var(--surface-raised)" : "transparent",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-sans)",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 24,
    color: color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-tertiary)"
    }
  }, sublabel)), value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-primary)",
      fontWeight: "var(--fw-medium)",
      whiteSpace: "nowrap"
    }
  }, value), showChevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-small-down",
    size: 24,
    color: "var(--text-tertiary)",
    style: {
      transform: "rotate(-90deg)"
    }
  }), selected && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick",
    size: 22,
    color: "var(--ink-icon)"
  }), trailing);
}
Object.assign(__ds_scope, { MenuRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MenuRow.jsx", error: String((e && e.message) || e) }); }

// components/core/ModelRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ModelRow — a selectable AI model in the model picker. Sparkle icon,
 * name + quality sublabel, trailing check when picked.
 */
function ModelRow({
  name,
  sublabel = "High quality",
  icon = "ai",
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 12px",
      borderRadius: "var(--radius-sm)",
      background: hover ? "var(--surface-raised)" : "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--ink-icon)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: "22px",
      color: "var(--text-primary)"
    }
  }, name), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "18px",
      color: "var(--text-tertiary)"
    }
  }, sublabel)), selected && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick",
    size: 22,
    color: "var(--accent)"
  }));
}
Object.assign(__ds_scope, { ModelRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ModelRow.jsx", error: String((e && e.message) || e) }); }

// components/core/RateStars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RateStars — 5-star rating control. Optional "Rate us" label and dismiss,
 * matching the empty-state prompt. Hover/click fills up to a star.
 */
function RateStars({
  value = 0,
  max = 5,
  label = "Rate us",
  onRate,
  onDismiss,
  size = 24,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(0);
  const shown = hovered || value;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: onDismiss || label ? "6px 14px 6px 8px" : 0,
      borderRadius: "var(--radius-pill)",
      background: onDismiss || label ? "var(--surface-raised)" : "transparent",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: "var(--ink-icon)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-circle",
    size: 22
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 4
    },
    onMouseLeave: () => setHovered(0)
  }, Array.from({
    length: max
  }).map((_, i) => {
    const n = i + 1;
    const filled = n <= shown;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      type: "button",
      "aria-label": `${n} star${n > 1 ? "s" : ""}`,
      onMouseEnter: () => setHovered(n),
      onClick: () => onRate && onRate(n),
      style: {
        border: "none",
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        display: "inline-flex",
        color: filled ? "var(--warning)" : "var(--ink-icon)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: filled ? "star-filled" : "star",
      size: size
    }));
  })));
}
Object.assign(__ds_scope, { RateStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RateStars.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  success: {
    icon: "tick",
    bg: "var(--success)"
  },
  error: {
    icon: "close",
    bg: "var(--danger)"
  },
  info: {
    icon: "ai",
    bg: "var(--accent)"
  }
};

/**
 * Toast — frosted notification card. Leading status badge, title + optional
 * subtitle. Floats over the chat with a soft shadow.
 */
function Toast({
  status = "success",
  title,
  subtitle,
  onClose,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: subtitle ? "flex-start" : "center",
      gap: 12,
      maxWidth: 420,
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-glass)",
      backdropFilter: "blur(var(--blur-md))",
      WebkitBackdropFilter: "blur(var(--blur-md))",
      boxShadow: "var(--ring), var(--shadow-card)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      flex: "0 0 auto",
      borderRadius: "50%",
      background: s.bg,
      color: "var(--white)",
      marginTop: subtitle ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-secondary)"
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      color: "var(--text-tertiary)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 18
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// ui_kits/extension/screens.jsx
try { (() => {
/* airatiik extension — UI-kit screens. Composes the design-system bundle.
   Exposes screen pieces on window for index.html's App. */
(function () {
  const DS = window.AiratiikAIChatDesignSystem_b8300c;
  const {
    Icon,
    IconButton,
    Pill,
    Composer,
    ChatBubble,
    Toggle,
    MenuRow,
    ModelRow,
    RateStars,
    Toast,
    Hint,
    Card,
    Button,
    Chip
  } = DS;
  const MODELS = [{
    name: "ChatGPT",
    sublabel: "High quality"
  }, {
    name: "Gemini 2.5 Flash",
    sublabel: "High quality"
  }, {
    name: "Claude",
    sublabel: "High quality"
  }, {
    name: "Grok",
    sublabel: "High quality"
  }, {
    name: "DeepSeek",
    sublabel: "High quality"
  }];

  /* ---- Header: floating glass chrome ---------------------------------- */
  function Header({
    model,
    onModel,
    onNew,
    onHistory,
    onSettings,
    onExport
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        zIndex: 5,
        padding: "12px",
        boxSizing: "border-box",
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--fade-top)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      interactive: true,
      onClick: onModel,
      style: {
        flex: "0 1 auto",
        minWidth: 0,
        padding: "6px 8px 6px 14px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ai",
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, model), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-small-down",
      size: 22,
      color: "rgba(0,0,0,0.6)"
    })), /*#__PURE__*/React.createElement(Pill, {
      frosted: true,
      style: {
        flex: "0 0 auto",
        gap: 2,
        padding: "2px 6px"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "message-add-alt",
      size: 36,
      onClick: onNew
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "history",
      size: 36,
      onClick: onHistory
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "export",
      size: 36,
      onClick: onExport
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings",
      size: 36,
      onClick: onSettings
    })));
  }

  /* ---- Empty state ---------------------------------------------------- */
  function EmptyState({
    rating,
    onRate,
    showRate,
    onDismissRate
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 24,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        font: "600 26px/34px var(--font-sans)",
        letterSpacing: "-0.01em",
        color: "var(--ink-700)"
      }
    }, "How can I help you?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "var(--text-secondary)",
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("span", null, "Open this sidebar: Ctrl+Shift+Y"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "var(--ink-600)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        fontWeight: 600
      }
    }, "?")), showRate && /*#__PURE__*/React.createElement(RateStars, {
      value: rating,
      onRate: onRate,
      onDismiss: onDismissRate,
      style: {
        marginTop: 4
      }
    }));
  }

  /* ---- Conversation --------------------------------------------------- */
  function Conversation({
    messages,
    generating
  }) {
    const endRef = React.useRef(null);
    React.useEffect(() => {
      if (endRef.current) endRef.current.scrollTop = endRef.current.scrollHeight;
    }, [messages, generating]);
    return /*#__PURE__*/React.createElement("div", {
      ref: endRef,
      style: {
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        padding: "84px 16px 132px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement(ChatBubble, {
      role: m.role
    }, m.text), m.role === "assistant" && !m.pending && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "copy",
      size: 36
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "sync",
      size: 36
    })))), generating && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "var(--text-tertiary)",
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "ai",
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      className: "ai-shimmer"
    }, "Generating answer\u2026")));
  }

  /* ---- Bottom sheet shell --------------------------------------------- */
  function Sheet({
    children,
    onClose,
    title
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 20,
        background: "rgba(20,20,20,0.18)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        marginTop: 64,
        width: "calc(100% - 24px)",
        background: "var(--surface-base)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--ring), var(--shadow-pop)",
        padding: 8,
        animation: "sheetIn 220ms var(--ease-out)"
      }
    }, title && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 14px 4px",
        font: "600 18px/26px var(--font-sans)"
      }
    }, title), children));
  }
  function ModelPicker({
    model,
    onPick,
    onClose
  }) {
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose
    }, MODELS.map(m => /*#__PURE__*/React.createElement(ModelRow, {
      key: m.name,
      name: m.name,
      sublabel: m.sublabel,
      selected: m.name === model,
      onClick: () => {
        onPick(m.name);
        onClose();
      }
    })));
  }
  function SettingsSheet({
    prefs,
    setPref,
    onClose
  }) {
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose,
      title: "Settings"
    }, /*#__PURE__*/React.createElement(MenuRow, {
      label: "Language",
      value: "English",
      showChevron: true,
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "AI voice",
      value: "John",
      showChevron: true,
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Font size",
      value: "Medium",
      showChevron: true,
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Appearance",
      value: "Light",
      showChevron: true,
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Auto-hide top bar",
      trailing: /*#__PURE__*/React.createElement(Toggle, {
        checked: prefs.hideTop,
        onChange: v => setPref("hideTop", v)
      })
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Auto-hide input bar",
      trailing: /*#__PURE__*/React.createElement(Toggle, {
        checked: prefs.hideInput,
        onChange: v => setPref("hideInput", v)
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--line-200)",
        margin: "8px 14px"
      }
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Messages to AI remaining",
      value: "99"
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Support",
      leadingIcon: "help",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Account settings",
      leadingIcon: "settings",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(MenuRow, {
      label: "Delete chats history",
      leadingIcon: "trash-alt",
      destructive: true,
      onClick: () => {}
    }));
  }
  function HistorySheet({
    chats,
    onOpen,
    onClose
  }) {
    const [q, setQ] = React.useState("");
    const filtered = chats.filter(c => c.title.toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/React.createElement(Sheet, {
      onClose: onClose,
      title: "Chat history"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "4px 8px 8px",
        padding: "8px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--surface-raised)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 20,
      color: "var(--text-tertiary)"
    }), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search chats",
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        font: "400 15px/22px var(--font-sans)",
        color: "var(--text-primary)"
      }
    })), filtered.map((c, i) => /*#__PURE__*/React.createElement(MenuRow, {
      key: i,
      label: c.title,
      sublabel: c.when,
      leadingIcon: "ai",
      trailing: /*#__PURE__*/React.createElement(IconButton, {
        icon: "dots-v",
        size: 32
      }),
      onClick: () => {
        onOpen(c);
        onClose();
      }
    })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 14px",
        color: "var(--text-tertiary)",
        fontSize: 15,
        textAlign: "center"
      }
    }, "No chats found"));
  }
  window.AiratiikKit = {
    MODELS,
    Header,
    EmptyState,
    Conversation,
    ModelPicker,
    SettingsSheet,
    HistorySheet,
    Toast,
    Hint,
    Composer,
    Chip
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/extension/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Composer = __ds_scope.Composer;

__ds_ns.Hint = __ds_scope.Hint;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MenuRow = __ds_scope.MenuRow;

__ds_ns.ModelRow = __ds_scope.ModelRow;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.RateStars = __ds_scope.RateStars;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

})();
