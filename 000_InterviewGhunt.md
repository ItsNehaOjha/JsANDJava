You want **zero confusion, zero panic, maximum clarity**.
So here it is — **a hard, exact JS interview checklist**.
Not explanations. **Rules.**

Print this mentally. Follow it. You’ll survive JS interviews.

---

## TL;DR

If you remember **these 25 rules**, you won’t blank out in JS interviews.

---

# 🔴 JAVASCRIPT INTERVIEW SURVIVAL RULES (MEMORIZE)

## 1️⃣ Equality & Coercion (MOST IMPORTANT)

1. **Always prefer `===` over `==`**
2. `null == undefined` → `true`
3. `null === undefined` → `false`
4. `null >= 0` → `true`
5. `null > 0` → `false`
6. `Number(null)` → `0`
7. `Number(undefined)` → `NaN`
8. `NaN !== NaN` (always)

---

## 2️⃣ Truthy / Falsy (NO EXCEPTIONS)

Falsy values (remember **only these 6**):

```
false, 0, "", null, undefined, NaN
```

Everything else is truthy.

---

## 3️⃣ `this` Binding (ORDER MATTERS)

1. Arrow function → `this` from parent
2. `bind()` → permanently fixes `this`
3. `call/apply()` → temporary `this`
4. Normal function → depends on caller
5. Static method → belongs to class, not object

---

## 4️⃣ `call`, `apply`, `bind`

| Method | Executes | Arguments |
| ------ | -------- | --------- |
| call   | Yes      | comma     |
| apply  | Yes      | array     |
| bind   | No       | comma     |

---

## 5️⃣ Arrays (TRAPS)

1. `array[-1]` → object property, NOT index
2. `for...of` → values only
3. `for...in` → keys (avoid for arrays)
4. Sparse array holes are skipped
5. `.length` ≠ actual elements

---

## 6️⃣ Array Methods

1. `map` → transform
2. `filter` → select
3. `reduce` → accumulate
4. `flat()` → depth = **1**
5. `flat(Infinity)` → dangerous

---

## 7️⃣ Objects (MUTATION RULES)

1. Objects are **reference types**
2. `const` ≠ immutable
3. `delete` mutates object ❌
4. Prefer:

```js
const { key, ...rest } = obj;
```

---

## 8️⃣ Copying Objects (CRITICAL)

| Method                       | Safe?       |
| ---------------------------- | ----------- |
| `{...obj}`                   | Shallow     |
| `Object.assign`              | Shallow     |
| `JSON.parse(JSON.stringify)` | ❌ Data loss |
| `structuredClone`            | ✅ Best      |

---

## 9️⃣ `Object.freeze`

1. Freeze is **shallow**
2. Non-strict mode → silent failure
3. Strict mode → throws error
4. ES modules are strict by default

---

## 🔟 Dates (INTERVIEW FAVORITE)

1. `new Date("02-02-2023")` → locale dependent
2. JSON converts Date → string
3. Timezone shifts happen automatically
4. Never trust date strings blindly

---

## 1️⃣1️⃣ Errors (SENIOR TOPIC)

1. JS has **runtime errors**, not compile-time
2. Wrapping error must preserve original
3. Correct way:

```js
throw new Error("msg", { cause: err });
```

4. Never invent `reason`, `customMessage`

---

## 1️⃣2️⃣ Async JS (MINIMUM)

1. Promise errors go to `.catch`
2. `async/await` is syntax sugar
3. `try/catch` works with `await`
4. `setTimeout` ≠ async execution order

---

## 1️⃣3️⃣ Security MYTHS

1. JS cannot be encrypted client-side
2. Obfuscation ≠ security
3. Minification ≠ hiding logic
4. Source maps expose everything

---

## 1️⃣4️⃣ Interview MINDSET (IMPORTANT)

When confused:

1. Identify operator (`==`, `>=`, `+`)
2. Identify coercion type
3. Reduce expression step-by-step
4. Never guess

Say this aloud if needed:

> “JS performs numeric coercion here…”

Interviewers love that.

---

## 2️⃣5️⃣ GOLDEN RULES (FINAL)

1. JS is **forgiving**, not smart
2. Explicit > implicit
3. Mutation is dangerous
4. Predict behavior, don’t assume
5. If it looks weird → coercion is involved

---

## If you remember ONLY ONE LINE

> **“JavaScript changes types silently — always ask: what is it converting into?”**

---


