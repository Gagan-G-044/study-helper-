import { StudyExample } from "./types";

export const STUDY_EXAMPLES: StudyExample[] = [
  {
    title: "Quantum Superposition & Qubits",
    topic: "Physics / Computation",
    content: `In classical computing, a bit can exist in only one of two states: 0 or 1. However, quantum computing relies on qubits, which represent a quantum system with two states. A qubit can exist in a superposition of both states simultaneously. Mathematically, this is written as |ψ⟩ = α|0⟩ + β|1⟩, where α and β are complex probability amplitudes.

When a qubit is measured, it collapses into either the |0⟩ or |1⟩ state with probabilities |α|² and |β|² respectively, satisfying the normalization condition |α|² + |β|² = 1. Superposition is what allows quantum computers to process complex calculations concurrently, but maintaining this state requires extreme cooling to avoid environmental noise and decoherence.`
  },
  {
    title: "Mitochondrial Electron Transport Chain",
    topic: "Biology / Biochemistry",
    content: `The Electron Transport Chain (ETC) is a series of four multi-protein complexes (Complex I through IV) located in the inner mitochondrial membrane. High-energy electrons derived from NADH and FADH2 (generated during glycolysis and the Krebs cycle) are passed sequentially through these complexes to terminal electron oxygen acceptors, forming water.

As electrons cascade through the chain, energy is released. Complexes I, III, and IV extract this energy to pump protons (H+) from the mitochondrial matrix into the intermembrane space, building a steep electrochemical gradient. The flow of protons back down this proton motive force through ATP Synthase drives the phosphorylation of ADP to produce ATP (oxidative phosphorylation).`
  },
  {
    title: "The Roman Republic's Dual Executive System",
    topic: "History / Political Science",
    content: `Following the expulsion of the Etruscan kings in 509 BCE, Rome founded a republican government built on constitutional checks. Instead of a monarch, the executive authority (known as 'imperium') was held by the Dual Consuls. Consuls were elected annually by the Centuriate Assembly and held absolute veto power over each other's decisions to prevent unilateral tyranny.

In times of extreme military crisis, the Roman Senate could appoint a singular 'Dictator' with absolute authority for a limited duration of six months. This division of dual imperium, mixed with the legislative powers of the Senate and the veto power of the Plebeian Tribunes, created a complex institutional balance that influenced modern democratic architectures.`
  }
];
