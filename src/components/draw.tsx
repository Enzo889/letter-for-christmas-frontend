"use client";
import { useState } from "react";
import {
  Box,
  Editor,
  StoreSnapshot,
  TLPageId,
  TLRecord,
  TLStoreSnapshot,
  Tldraw,
  TldrawImage,
  getSnapshot,
} from "tldraw";
import "tldraw/tldraw.css";
import initialSnapshot from "./snapshot.json";

interface propSnapshot {
  snapshotprop?: StoreSnapshot<TLRecord>;
}

// Accept snapshot as a prop
export default function TldrawImageComponent({ snapshotprop }: propSnapshot) {
  const [editor, setEditor] = useState<Editor>();

  // Initialize snapshot state with the prop or fallback to initialSnapshot
  const [snapshot, setSnapshot] = useState<StoreSnapshot<TLRecord>>(
    snapshotprop || (initialSnapshot as TLStoreSnapshot)
  );

  const [currentPageId, setCurrentPageId] = useState<TLPageId | undefined>();
  const [showBackground, setShowBackground] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewportPageBounds, setViewportPageBounds] = useState(
    new Box(0, 0, 600, 400)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [format, setFormat] = useState<"svg" | "png">("svg");

  return (
    <div style={{ padding: 30 }}>
      <div>
        <button
          style={{ cursor: "pointer", marginRight: 8 }}
          onClick={(e) => {
            if (isEditing) {
              if (!editor) return;
              setIsDarkMode(editor.user.getIsDarkMode());
              setShowBackground(editor.getInstanceState().exportBackground);
              setViewportPageBounds(editor.getViewportPageBounds());
              setCurrentPageId(editor.getCurrentPageId());
              setSnapshot(getSnapshot(editor.store).document);
              setIsEditing(false);
              e.stopPropagation();
              const stringJsonSnapshot = JSON.stringify(
                getSnapshot(editor.store).document
              );
              console.log(stringJsonSnapshot);
            } else {
              e.stopPropagation();
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "✓ Save drawing" : "✎ Edit drawing"}
        </button>
        {!isEditing && (
          <>
            <label htmlFor="format" style={{ marginRight: 8 }}>
              Format
            </label>
            <select
              name="format"
              value={format}
              onChange={(e) => {
                setFormat(e.currentTarget.value as "svg" | "png");
              }}
            >
              <option value="svg">SVG</option>
              <option value="png">PNG</option>
            </select>
          </>
        )}
      </div>
      <div style={{ width: 600, height: 400, marginTop: 15 }}>
        {isEditing ? (
          <Tldraw
            snapshot={snapshot}
            onMount={(editor: Editor) => {
              setEditor(editor);
              editor.user.updateUserPreferences({
                colorScheme: isDarkMode ? "dark" : "light",
              });
              if (currentPageId) {
                editor.setCurrentPage(currentPageId);
              }
              if (viewportPageBounds) {
                editor.zoomToBounds(viewportPageBounds, { inset: 0 });
              }
            }}
          />
        ) : (
          <TldrawImage
            snapshot={snapshot}
            pageId={currentPageId}
            background={showBackground}
            darkMode={isDarkMode}
            bounds={viewportPageBounds}
            padding={0}
            scale={1}
            format={format}
          />
        )}
      </div>
    </div>
  );
}
