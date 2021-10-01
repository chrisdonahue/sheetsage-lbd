#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*160
    }
}

\new Staff { 
    {
        \clef treble
        \key d \major
        \time 4/4
        
        fis''8 fis''8 fis''8 g''16 a''8. g''8 fis''8 e''8 | d''8 d''8 d''8 e''16 fis''4 r16 d''8 cis''8 | b'8 r4 b'8 cis''4 d''8 e''8 | d''2. r8 g'8 | a'4 r8 a'8 a'8 a'8 b'8 a'8~ | a'4. r4. b'8 cis''8 | d''4. d''8 d''8 d''8 e''8 cis''8~ | cis''4 r2 cis''8 d''8 | e''4. fis''4. e''4 | a'4. d''4. d''8 d''8
    }
}

>>

\version "2.18.2"