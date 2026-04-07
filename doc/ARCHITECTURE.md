# 🏛️ Project Architecture

This document describes the high-level architecture of **DezinetVerse**, detailing the system structure and core workflows.

## 🧱 1. System High-Level Overview (Next.js 16)

DezinetVerse is built on **Next.js 16 (App Router)** with a focus on high-fidelity visual delivery. The architecture leverages Server-Side Rendering (SSR) for SEO-rich pages and Client-Side Hydration for immersive player interactions.

```mermaid
graph TD
    A[App Router Hub] --> B[Static/SSR Pages]
    A --> C[Components Library]
    A --> D[Data Source]

    subgraph "Pages Structure"
        B1["/videos (Gallery)"]
        B2["/series (Binge Collections)"]
        B3["/gear (Showcase)"]
        B4["/membership (Gateway)"]
    end

    subgraph "Shared Components"
        C1[Navbar.tsx + Discovery Dashboard] 
        C2[CustomPlayer.tsx + Ad Engine]
        C3[Global Search]
    end

    subgraph "Data Storage"
        D1["video.json (Meta-data)"]
        D2[Public Assets / Static Hosting]
    end

    B --- C
    C --- D
```

---

## 🎬 2. Video Player Logic & Ad Execution Flow

The player handles a sequential ad injection logic before playing the source content. Key features include keyboard shortcuts (`Space` to play, `F` for full-screen) and an integrated seek feedback system.

```mermaid
stateDiagram-v2
    [*] --> Initialize: Load Source Content
    Initialize --> AdCheck: Check User Type / Ad Status
    
    state AdCheck {
        [*] --> AdActive: isAdPlaying = true
        AdActive --> AdCountdown: Start 5s Timer
        AdCountdown --> CanSkip: canSkipAd = true (Timer Done)
        CanSkip --> [*]: User Skips Ad / Ad Ends
    }

    AdCheck --> VideoStart: adEnded = true / Ad Skipped
    
    state VideoContent {
        VideoStart --> Playing: setIsPlaying(true)
        Playing --> Paused: togglePlay()
        Paused --> Playing
        Playing --> Seeking: handleSeek() / jump()
        Seeking --> Playing
    }

    VideoContent --> [*]: Video Ended
```

### 🧠 Core Player State:
-   **isAdPlaying:** Boolean flag that swaps the video source from the ad URL to the content URL.
-   **interactionNeeded:** Critical for browsers with autoplay blocks; forces a manual overlay click to begin playback.
-   **seekFeedback:** Temporary UI state to show `◀◀` or `▶▶` symbols on the screen.

---

## 🧭 3. Navigation Hierarchy (Discovery System)

```mermaid
mindmap
  root((DezinetVerse))
    Hero (Slider Feature)
    Discovery Dashboard (Hamburger)
      ::icon(fa fa-search)
      Search System
      Discover
        Videos
        About
      Stories
        Series
        Gear
      Membership
        Join us
        Login/Signup
    Footer System
      About
      Legal / Terms
      Creator Contacts
```

The Discovery Dashboard is a full-screen React state-managed overlay (`Navbar.tsx`) that slides from top to bottom. It uses a `no-scrollbar` utility to ensure a cinematic feel.

---

## 📦 4. Data Flow Topology

```mermaid
sequenceDiagram
    participant U as User Agent
    participant P as Next.js Page (Client/Server)
    participant C as Custom Component
    participant D as Data Storage (JSON)

    U->>P: Access URL (e.g., /videos/[id])
    P->>D: Fetch Meta-data by ID
    D-->>P: Returns Video Info (Title, Src, Poster)
    P->>C: Passes Data as Props
    C->>P: Render UI with Theme Tokens
    U->>C: Interacts (Play/Seek)
    C-->>U: Instant UI Feed-back (Seek Feedback/State Update)
```
