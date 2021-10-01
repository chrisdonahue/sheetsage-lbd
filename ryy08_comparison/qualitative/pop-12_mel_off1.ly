#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*128
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        fis'''16 g'''4 fis'''16 f'''4 e'''8. r16 d'''8~ | d'''16 cis'''16 r4~ r16 d'''8. r16 e'''16 r4~ | r16 g''8 fis''8. f''4 e''8. d''8.~ | d''16 cis''4 r8 d'''8. cis'''4 d'''16 cis'''16 | c'''8. r4 c'''8. c''8 cis''16 c''16 r16 dis''16 | d''16 c''8. r4. fis'''16 d'''4~ d'''16 | f''8 e''16 r16 d''16 cis''16 d'''4 r4. | a''8 r4 e''8 f''8 e''8. dis''8 e''16
    }
}

>>

\version "2.18.2"